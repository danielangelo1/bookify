import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "../DefaultDialog/styles";
import { Cross2Icon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Book } from "../../types/Book/Book";
import { Author } from "../../types/Author/Author";
import { DialogSubtitle, DialogTrigger } from "./styles";
import { useContext } from "react";
import { AuthorContext } from "../../context/AuthorContext/AuthorContext";
import { BookContext } from "../../context/BookContext/BookContext";

interface DetailsModalProps {
  data: Book | Author;
}

const DetailsModal = ({ data }: DetailsModalProps) => {
  const { getAuthorName } = useContext(AuthorContext);
  const { getAllBooksByAuthor } = useContext(BookContext);

  const tipo = "author_id" in data ? "livro" : "autor";

  const isBook = (data: Book | Author): data is Book => {
    return "author_id" in data;
  };

  return (
    <Dialog.Root>
      <DialogTrigger asChild>
        <EyeOpenIcon width={24} height={24} />
      </DialogTrigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Detalhes do {tipo} </DialogTitle>
          <DialogSubtitle>
            ID:
            <DialogDescription style={{ marginBottom: "0" }}>
              {data.id}
            </DialogDescription>
          </DialogSubtitle>

          <DialogSubtitle>
            Nome:
            <DialogDescription style={{ marginBottom: "0" }}>
              {data.name}
            </DialogDescription>
          </DialogSubtitle>

          {isBook(data) ? (
            <>
              <DialogSubtitle>
                Páginas:
                <DialogDescription style={{ marginBottom: "0" }}>
                  {data.pages || "Não informado"}
                </DialogDescription>
              </DialogSubtitle>
              <DialogSubtitle>
                Nome do Autor:
                <DialogDescription style={{ marginBottom: "0" }}>
                  {getAuthorName(data.author_id)}
                </DialogDescription>
              </DialogSubtitle>
              <DialogSubtitle>
                ID do Autor:
                <DialogDescription style={{ marginBottom: "0" }}>
                  {data.author_id}
                </DialogDescription>
              </DialogSubtitle>
            </>
          ) : (
            <>
              <DialogSubtitle>
                Email:
                <DialogDescription style={{ marginBottom: "0" }}>
                  {data.email}
                </DialogDescription>
              </DialogSubtitle>

              {data?.id && (
                <>
                  <DialogSubtitle>
                    Quantidade de livros:
                    <DialogDescription style={{ marginBottom: "0" }}>
                      {getAllBooksByAuthor(data.id).length}
                    </DialogDescription>
                  </DialogSubtitle>
                  <DialogSubtitle>
                    Livros cadastrados:
                    {getAllBooksByAuthor(data.id).map((book) => (
                      <DialogDescription
                        style={{ marginBottom: "0" }}
                        key={book.id}
                      >
                        {book.name},
                      </DialogDescription>
                    ))}
                  </DialogSubtitle>
                </>
              )}
            </>
          )}
          <Dialog.Close asChild>
            <CloseButton>
              <Cross2Icon />
            </CloseButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DetailsModal;
