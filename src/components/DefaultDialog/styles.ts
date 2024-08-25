import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  padding: 25px;
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  margin: 0 auto;
  position: fixed;
  display: flex;
  flex-direction: column;
  animation: ${contentShow} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  z-index: 1;
  top: 50%;
  left: 50%;
  &:focus {
    outline: none;
  }
`;

export const DialogTitle = styled(Dialog.Title)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const DialogDescription = styled(Dialog.Description)`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #f5f5f5;
  border: none;
  border-radius: 6px;
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const CreateButton = styled.button`
  background-color: #008ff519;
  border: none;
  border-radius: 6px;
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #006dcbf2;
  gap: 10px;
  &:hover {
    background-color: #008ff5;
    color: white;
    transition: 0.3s;
  }
`;
