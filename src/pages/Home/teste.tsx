import { useContext } from "react";
import { AuthorContext } from "../../context/AuthorContext/AuthorContext";

const Teste = () => {
  const { postAuthor, deleteAuthor } = useContext(AuthorContext);

  return (
    <>
      <button
        onClick={() =>
          postAuthor({
            id: "1",
            // id: `A-${Date.now()}`,
            name: "John Doe",
            email: "",
          })
        }
      >
        CLICKA
      </button>

      <button onClick={() => deleteAuthor("2")}>DELETE</button>
    </>
  );
};

export default Teste;
