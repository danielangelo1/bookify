import { useContext, useEffect } from "react";
import DefaultTable from "../../components/DefaultTable/DefautTable";
import { BookContext } from "../../context/BookContext/BookContext";
import DefaultDialog from "../../components/DefaultDialog/DefaultDialog";
import { ActionsContainer } from "./styles";

const Books = () => {
  const { books, getBooks } = useContext(BookContext);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <ActionsContainer>
        <input type="text" placeholder="Search" />
        <DefaultDialog />
      </ActionsContainer>
      {books.length > 0 ? <DefaultTable data={books} /> : <h1>Loading...</h1>}
    </main>
  );
};

export default Books;
