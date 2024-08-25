import { useContext, useEffect } from "react";
import { AuthorContext } from "../../context/AuthorContext/AuthorContext";
import DefaultTable from "../../components/DefaultTable/DefautTable";

const Authors = () => {
  const { authors, getAuthors, postAuthor } = useContext(AuthorContext);

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <main style={{ paddingTop: "6rem" }}>
      <button
        onClick={() =>
          postAuthor({
            id: `A-${Date.now()}`,
            name: "John Doe",
          })
        }
      >
        CLICKA
      </button>
      {authors.length > 0 ? (
        <DefaultTable data={authors} />
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default Authors;
