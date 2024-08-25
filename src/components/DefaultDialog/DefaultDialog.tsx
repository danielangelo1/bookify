import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import {
  Button,
  CreateButton,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "./styles";
import BookForm from "../Forms/BookForm/BookForm";

const DefaultDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CreateButton>
          Criar <PlusIcon />
        </CreateButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Adicionar Livro</DialogTitle>
          <DialogDescription>Crie um novo Livro</DialogDescription>
          <BookForm />
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <Button>Save changes</Button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <Button>
              <Cross2Icon />
            </Button>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DefaultDialog;
