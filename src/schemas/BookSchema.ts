import * as yup from "yup";
import { ptForm } from "yup-locale-pt";

yup.setLocale(ptForm);

export const BookSchema = yup.object().shape({
  id: yup.string(),
  name: yup.string().required(),
  author_id: yup.string().required(),
  pages: yup.number().positive().integer(),
});
