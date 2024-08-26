import { useContext, useEffect } from "react";
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
  StyledSelect,
} from "../styles";
import { AuthorContext } from "../../../context/AuthorContext/AuthorContext";
import { toast } from "react-toastify";

interface BookFormProps {
  onBookSubmit: () => void;
}

const BookForm = ({ onBookSubmit }: BookFormProps) => {
  const { postBook } = useContext(BookContext);
  const { authors, getAuthors } = useContext(AuthorContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Book>({
    resolver: yupResolver(BookSchema),
  });

  useEffect(() => {
    getAuthors();
  }, []);

  const onSubmit: SubmitHandler<Book> = (data: Book) => {
    const completeData = {
      id: `B-${Date.now()}`,
      name: data.name,
      pages: data.pages || 0,
      author_id: data.author_id,
    };
    postBook(completeData);
    onBookSubmit();
    toast.success("Livro adicionado com sucesso!");
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {authors.length > 0 ? (
        <>
          <StyledFieldset>
            <StyledLabel htmlFor="name">Nome</StyledLabel>
            <StyledInput id="name" {...register("name")} />
            <SpanError>{errors.name?.message}</SpanError>
          </StyledFieldset>
          <StyledFieldset>
            <StyledLabel htmlFor="author_id">Autor</StyledLabel>
            <StyledSelect id="author_id" {...register("author_id")}>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </StyledSelect>
            <SpanError>{errors.author_id?.message}</SpanError>
          </StyledFieldset>
          <StyledFieldset>
            <StyledLabel htmlFor="pages">Páginas</StyledLabel>
            <StyledInput className="Input" id="pages" {...register("pages")} />
            <SpanError>{errors.pages?.message}</SpanError>
          </StyledFieldset>
          <StyledButton type="submit">Adicionar</StyledButton>
        </>
      ) : (
        <SpanError>
          Não tem nenhum autor na nossa base dados :( Crie um!
        </SpanError>
      )}
    </StyledForm>
  );
};

export default BookForm;
