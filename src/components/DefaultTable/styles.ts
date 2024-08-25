import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

export const TableHead = styled.thead`
  background-color: #f1f1f1;
`;

export const TableHeadRow = styled.tr`
  border-bottom: 1px solid #ddd;
  font-size: 1.2rem;

  th {
    padding: 1rem;
  }
`;

export const TableHeadData = styled.th`
  padding: 1rem;
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

export const TableBodyData = styled.td`
  padding: 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  padding: 0.2rem;

  &:hover {
    background-color: #ddd;
  }
`;
