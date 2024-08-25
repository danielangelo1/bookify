import { useContext } from "react";
import { Book } from "../../../types/Book/Book";
import { SubmitHandler, useForm } from "react-hook-form";
import { BookSchema } from "../../../schemas/BookSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { BookContext } from "../../../context/BookContext/BookContext";

const BookForm = () => {
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Name
        </label>
        <input className="Input" id="name" {...register("name")} />
        <span>{errors.name?.message}</span>
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="author_id">
          Author ID
        </label>
        <input className="Input" id="author_id" {...register("author_id")} />
        <span>{errors.author_id?.message}</span>
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="pages">
          Pages
        </label>
        <input className="Input" id="pages" {...register("pages")} />
        <span>{errors.pages?.message}</span>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
