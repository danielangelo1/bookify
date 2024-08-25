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
import { DialogTrigger } from "./styles";

interface DetailsModalProps {
  data: Book | Author;
}

const DetailsModal = ({ data }: DetailsModalProps) => {
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
          <DialogDescription>ID: {data.id}</DialogDescription>
          <DialogDescription>Nome: {data.name}</DialogDescription>
          {isBook(data) ? (
            <>
              <DialogDescription>
                ID Do Autor: {data.author_id}
              </DialogDescription>
              <DialogDescription>
                Páginas: {data.pages || "Não Informado"}
              </DialogDescription>
            </>
          ) : (
            <>
              <DialogDescription>Email: {data.email}</DialogDescription>
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
