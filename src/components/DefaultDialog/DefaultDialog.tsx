import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import {
  CloseButton,
  CreateButton,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "./styles";
import BookForm from "../Forms/BookForm/BookForm";
import { useState } from "react";
import AuthorForm from "../Forms/AuthorForm/AuthorForm";

interface DefaultDialogProps {
  type: string;
}

const DefaultDialog = ({ type }: DefaultDialogProps) => {
  const [open, setOpen] = useState(false);

  const texto = type === "book" ? "Livro" : "Autor";
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <CreateButton>
          Criar <PlusIcon />
        </CreateButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Adicionar {texto}</DialogTitle>
          <DialogDescription>Crie um novo {texto}</DialogDescription>
          {type === "book" ? (
            <BookForm onBookSubmit={() => setOpen(false)} />
          ) : (
            <AuthorForm onAuthorSubmit={() => setOpen(false)} />
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

export default DefaultDialog;
