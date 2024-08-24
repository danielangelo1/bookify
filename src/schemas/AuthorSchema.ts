import * as yup from "yup";

export const AuthorSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email(),
});
