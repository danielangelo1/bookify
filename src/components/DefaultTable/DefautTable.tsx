import { Author } from "../../types/Author/Author";
import { Book } from "../../types/Book/Book";
import { useContext, useState } from "react";
import { AuthorContext } from "../../context/AuthorContext/AuthorContext";
import { BookContext } from "../../context/BookContext/BookContext";
import {
  Button,
  SearchContainer,
  StyledInput,
  Table,
  TableBody,
  TableBodyData,
  TableBodyRow,
  TableContainer,
  TableFooter,
  TableHead,
  TableHeadRow,
} from "./styles";
import DeleteDialog from "../DeleteDialog/DeleteDialog";
import DetailsModal from "../DetailsModal/DetailsModal";

interface DefaultTableProps {
  data: Author[] | Book[];
}

const DefaultTable = ({ data }: DefaultTableProps) => {
  const { deleteAuthor } = useContext(AuthorContext);
  const { deleteBook } = useContext(BookContext);
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value?.toString().toLowerCase().includes(search.toLowerCase()),
    ),
  );

  return (
    <TableContainer>
      <SearchContainer>
        <StyledInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar"
        />
      </SearchContainer>
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
          {filteredData.map((item) => (
            <TableBodyRow key={item.id}>
              <TableBodyData>
                <DetailsModal data={item} />
              </TableBodyData>

              {Object.values(item).map((value, index) => (
                <TableBodyData key={index}>{value}</TableBodyData>
              ))}

              <TableBodyData>
                <Button>
                  <DeleteDialog
                    type={item}
                    onDelete={
                      "author_id" in item
                        ? () => deleteBook(item.id ?? "")
                        : () => deleteAuthor(item.id ?? "")
                    }
                  />
                </Button>
              </TableBodyData>
            </TableBodyRow>
          ))}

          {filteredData.length === 0 && (
            <TableBodyRow>
              <TableBodyData colSpan={Object.keys(data[0]).length + 2}>
                Nenhum resultado encontrado
              </TableBodyData>
            </TableBodyRow>
          )}
        </TableBody>
        <TableFooter>Total de registros: {data.length}</TableFooter>
      </Table>
    </TableContainer>
  );
};

export default DefaultTable;
