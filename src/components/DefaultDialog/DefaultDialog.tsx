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

const DefaultDialog = () => {
  const [open, setOpen] = useState(false);
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
          <DialogTitle>Adicionar Livro</DialogTitle>
          <DialogDescription>Crie um novo livro</DialogDescription>
          <BookForm onBookSubmit={() => setOpen(false)} />
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
