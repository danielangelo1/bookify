import { useContext, useEffect } from "react";
import { AuthorContext } from "../../context/AuthorContext/AuthorContext";
import DefaultTable from "../../components/DefaultTable/DefautTable";
import { ActionsContainer } from "../Books/styles";
import DefaultDialog from "../../components/DefaultDialog/DefaultDialog";

const Authors = () => {
  const { authors, getAuthors, postAuthor } = useContext(AuthorContext);

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <ActionsContainer>
        <input type="text" placeholder="Search" />
        <DefaultDialog type="author" />
      </ActionsContainer>
      {authors.length > 0 ? (
        <DefaultTable data={authors} />
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default Authors;
