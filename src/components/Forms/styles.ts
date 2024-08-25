import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  box-shadow: 0 0 0 0.1rem #001d4a;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem #001d4a;
  }
`;

export const StyledFieldset = styled.fieldset`
  all: unset;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #008ff5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  gap: 10px;
  &:hover {
    background-color: #006dcbf2;
    transition: 0.3s;
  }
`;

export const SpanError = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;
