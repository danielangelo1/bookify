import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { TrashIcon } from "@radix-ui/react-icons";
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  CancelButton,
  DeleteButton,
} from "./styles";

import { toast } from "react-toastify";
import { Author } from "../../types/Author/Author";
import { Book } from "../../types/Book/Book";

interface DeleteDialogProps {
  onDelete: () => void;
  type: Author | Book;
}

const DeleteDialog = ({ onDelete, type }: DeleteDialogProps) => {
  const texto = "author_id" in type ? "livro" : "autor";

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <TrashIcon width={24} height={24} />
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogTitle>Você tem certeza disso?</AlertDialogTitle>
          <AlertDialogDescription>
            Você tem certeza que deseja deletar esse {texto}? Essa ação é
            irreversível.
          </AlertDialogDescription>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <CancelButton style={{ marginRight: 25 }}>Cancelar</CancelButton>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <DeleteButton
                onClick={() => {
                  onDelete();
                  toast.success(`${texto} deletado com sucesso!`);
                }}
              >
                Sim, deletar {texto}
              </DeleteButton>
            </AlertDialog.Action>
          </div>
        </AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default DeleteDialog;
