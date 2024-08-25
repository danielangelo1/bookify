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
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogTitle = styled(Dialog.Title)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const DialogDescription = styled(Dialog.Description)`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 10px;
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

export const CloseButton = styled.button`
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #666;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border: none;

  &:hover {
    color: #333;
  }

  &:focus {
    box-shadow: 0 0 0 2px #001d4a;
  }
`;
