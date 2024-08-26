import { useContext } from "react";
import { AuthorContext } from "../../../context/AuthorContext/AuthorContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthorSchema } from "../../../schemas/AuthorSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Author } from "../../../types/Author/Author";
import { toast } from "react-toastify";
import {
  SpanError,
  StyledButton,
  StyledFieldset,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../styles";

interface AuthorFormProps {
  onAuthorSubmit: () => void;
}

const AuthorForm = ({ onAuthorSubmit }: AuthorFormProps) => {
  const { postAuthor } = useContext(AuthorContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Author>({
    resolver: yupResolver(AuthorSchema),
  });

  const onSubmit: SubmitHandler<Author> = (data: Author) => {
    const completeData = {
      id: `A-${Date.now()}`,
      name: data.name,
      email: data.email || "Não Informado",
    };
    postAuthor(completeData);
    onAuthorSubmit();
    toast.success("Autor adicionado com sucesso!");
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFieldset>
        <StyledLabel htmlFor="name">
          Nome <span style={{ color: "red" }}>*</span>
        </StyledLabel>
        <StyledInput id="name" {...register("name")} />
        <SpanError>{errors.name?.message}</SpanError>
      </StyledFieldset>
      <StyledFieldset>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput id="email" type="email" {...register("email")} />
        <SpanError>{errors.email?.message}</SpanError>
      </StyledFieldset>
      <StyledButton type="submit">Adicionar</StyledButton>
    </StyledForm>
  );
};

export default AuthorForm;
