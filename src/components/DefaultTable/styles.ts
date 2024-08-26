import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: 100%;
    font-size: 0.9rem;
  }
`;

export const TableHead = styled.thead`
  background-color: #f1f1f1;

  th {
    font-size: 1rem;
  }
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

  @media (max-width: 768px) {
    td {
      padding: 0.5rem;
    }
  }
`;

export const TableBodyData = styled.td`
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
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

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ddd;
  position: relative;

  &:focus {
    outline: none;
    border: 1px solid #333;
  }

  &:hover {
    border: 1px solid #333;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
`;
