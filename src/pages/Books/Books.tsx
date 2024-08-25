import { useContext, useEffect } from "react";
import DefaultTable from "../../components/DefaultTable/DefautTable";
import { BookContext } from "../../context/BookContext/BookContext";

const Books = () => {
  const { books, getBooks, postBook } = useContext(BookContext);

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <button
        onClick={() =>
          postBook({
            id: `B-${Date.now()}`,
            name: "John Doe",
            author_id: "1",
            pages: 100,
          })
        }
      >
        CLICKA
      </button>
      {books.length > 0 ? <DefaultTable data={books} /> : <h1>Loading...</h1>}
    </main>
  );
};

export default Books;
