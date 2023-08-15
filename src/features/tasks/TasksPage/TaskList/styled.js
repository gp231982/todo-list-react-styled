import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  margin-block-start: 0;
  padding: 0;
  padding-right: 40px;
  padding-left: 40px;
`;

export const Item = styled.li`
  border-bottom: 1px solid #dddada;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}

  @media (max-width: 500px) {
    justify-content: space-evenly;
    text-align: center;
  }
`;

export const Button = styled.button`
  min-width: 40px;
  height: 40px;
  transition: 0.3s;
  color: white;
  border: none;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: rgb(25, 122, 35);
      &:hover {
        cursor: pointer;
        background-color: rgb(25, 122, 35, 0.85);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: rgb(237, 41, 60);

      &:hover {
        cursor: pointer;
        background-color: rgb(237, 41, 60, 0.85);
      }

      @media (max-width: 500px) {
        margin-left: unset;
      }
    `}
`;

export const TaskSpan = styled.span`
  padding: 30px;
  font-size: 16px;
  word-break: break-word;
  flex-grow: 1;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  color: rgb(0, 153, 186);
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: rgba(0, 153, 186, 0.8);
    font-weight: normal;
  }
`;
