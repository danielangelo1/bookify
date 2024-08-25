import { useContext } from "react";
import { Book } from "../../../types/Book/Book";
import { SubmitHandler, useForm } from "react-hook-form";
import { BookSchema } from "../../../schemas/BookSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { BookContext } from "../../../context/BookContext/BookContext";
import {
  SpanError,
  StyledButton,
  StyledFieldset,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../styles";

interface BookFormProps {
  onBookSubmit: () => void;
}

const BookForm = ({ onBookSubmit }: BookFormProps) => {
  const { postBook } = useContext(BookContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Book>({
    resolver: yupResolver(BookSchema),
  });

  const onSubmit: SubmitHandler<Book> = (data: Book) => {
    const completeData = {
      id: `B-${Date.now()}`,
      name: data.name,
      pages: data.pages,
      author_id: data.author_id,
    };
    postBook(completeData);
    onBookSubmit();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFieldset>
        <StyledLabel htmlFor="name">Nome</StyledLabel>
        <StyledInput id="name" {...register("name")} />
        <SpanError>{errors.name?.message}</SpanError>
      </StyledFieldset>
      <StyledFieldset>
        <StyledLabel htmlFor="author_id">Autor</StyledLabel>
        <StyledInput id="author_id" {...register("author_id")} />
        <SpanError>{errors.author_id?.message}</SpanError>
      </StyledFieldset>
      <StyledFieldset>
        <StyledLabel htmlFor="pages">Páginas</StyledLabel>
        <StyledInput className="Input" id="pages" {...register("pages")} />
        <SpanError>{errors.pages?.message}</SpanError>
      </StyledFieldset>
      <StyledButton type="submit">Adicionar</StyledButton>
    </StyledForm>
  );
};

export default BookForm;
