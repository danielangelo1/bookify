import * as Dialog from "@radix-ui/react-dialog";

import styled from "styled-components";

export const DialogTrigger = styled(Dialog.Trigger)`
  cursor: pointer;
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  padding: 0.2rem;
  &:hover {
    background-color: #ddd;
  }
`;
