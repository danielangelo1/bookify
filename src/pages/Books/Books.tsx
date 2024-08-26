import { useContext, useEffect } from "react";
import DefaultTable from "../../components/DefaultTable/DefautTable";
import { BookContext } from "../../context/BookContext/BookContext";
import DefaultDialog from "../../components/DefaultDialog/DefaultDialog";
import { ActionsContainer, MainContainer } from "./styles";

const Books = () => {
  const { books, getBooks } = useContext(BookContext);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <MainContainer>
      <ActionsContainer>
        <DefaultDialog type="book" />
      </ActionsContainer>
      {books.length > 0 ? (
        <DefaultTable data={books} />
      ) : (
        <p>Nenhum livro em nossa base, adicione um clicando no botão Criar.</p>
      )}
    </MainContainer>
  );
};

export default Books;
