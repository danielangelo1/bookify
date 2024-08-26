import { useContext, useEffect } from "react";
import { AuthorContext } from "../../context/AuthorContext/AuthorContext";
import DefaultTable from "../../components/DefaultTable/DefautTable";
import { ActionsContainer, MainContainer } from "../Books/styles";
import DefaultDialog from "../../components/DefaultDialog/DefaultDialog";

const Authors = () => {
  const { authors, getAuthors } = useContext(AuthorContext);

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <MainContainer>
      <ActionsContainer>
        <DefaultDialog type="author" />
      </ActionsContainer>
      {authors.length > 0 ? (
        <DefaultTable data={authors} />
      ) : (
        <p>Nenhum ator em nossa base, adicione um clicando no botão Criar.</p>
      )}
    </MainContainer>
  );
};

export default Authors;
