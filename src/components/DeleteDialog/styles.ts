import styled, { keyframes } from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const overlayShow = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const contentShow = keyframes`
  0% { opacity: 0; transform: translate(-50%, -48%) scale(.96); }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

export const AlertDialogOverlay = styled(AlertDialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const AlertDialogContent = styled(AlertDialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
`;

export const AlertDialogTitle = styled(AlertDialog.Title)`
  margin: 0;

  font-size: 17px;
  font-weight: 500;
`;

export const AlertDialogDescription = styled(AlertDialog.Description)`
  margin-bottom: 20px;
  color: #333;
  font-size: 15px;
  line-height: 1.5;
`;

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const CancelButton = styled.button`
  background-color: #e0e0e0;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #bdbdbd;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    margin-top: -6px;
  }
`;
