import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  transition: 0.3s;
  font-size: 15px;
  color: rgb(0, 153, 186);

  &:hover {
    cursor: pointer;
    color: rgb(0, 153, 186, 0.8);
  }

  ${({ tasksAllDone }) =>
    tasksAllDone &&
    css`
      color: #d4dbe3;
      &:hover {
        cursor: auto;
        color: #d4dbe3;
      }
    `}
`;
