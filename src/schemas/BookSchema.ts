import * as yup from "yup";

export const BookSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  author_id: yup.string().required(),
  pages: yup.number(),
});
