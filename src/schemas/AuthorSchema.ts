import * as yup from "yup";

export const AuthorSchema = yup.object().shape({
  id: yup.string(),
  name: yup.string().required(),
  email: yup.string().email().notRequired(),
});
