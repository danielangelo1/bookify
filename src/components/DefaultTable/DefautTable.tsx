import { EyeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Author } from "../../types/Author/Author";
import { Book } from "../../types/Book/Book";
import { useContext } from "react";
import { AuthorContext } from "../../context/AuthorContext/AuthorContext";
import { BookContext } from "../../context/BookContext/BookContext";
import {
  Button,
  Table,
  TableBody,
  TableBodyData,
  TableBodyRow,
  TableHead,
  TableHeadRow,
} from "./styles";
import DeleteDialog from "../DeleteDialog/DeleteDialog";

interface DefaultTableProps {
  data: Author[] | Book[];
}

const DefaultTable = ({ data }: DefaultTableProps) => {
  const { deleteAuthor } = useContext(AuthorContext);
  const { deleteBook } = useContext(BookContext);

  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          <th>Detalhes</th>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key.toLocaleUpperCase()}</th>
          ))}
          <th>Ações</th>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableBodyRow key={item.id}>
            <TableBodyData>
              <Button>
                <EyeOpenIcon width={24} height={24} />
              </Button>
            </TableBodyData>

            {Object.values(item).map((value) => (
              <TableBodyData key={value}>{value}</TableBodyData>
            ))}

            <TableBodyData>
              <Button>
                <Pencil1Icon width={24} height={24} />
              </Button>
              <Button>
                <DeleteDialog
                  type={item}
                  onDelete={
                    "author_id" in item
                      ? () => deleteBook(item.id)
                      : () => deleteAuthor(item.id)
                  }
                />
              </Button>
            </TableBodyData>
          </TableBodyRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DefaultTable;
