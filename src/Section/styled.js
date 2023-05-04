import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ className }) =>
    className === "addTaskSection" &&
    css`
      background-color: #ffffff;
      margin-bottom: 10px;
    `}

  ${({ className }) =>
    className === "tasksSection" &&
    css`
      margin: 0 auto;
      padding-bottom: 20px;
      background-color: #ffffff;
    `}
`;

export const Header = styled.h2`
  ${({ className }) =>
    className === "addTaskSection__header" &&
    css`
      font-size: 20px;
      padding-left: 20px;
      height: 80px;
      border-bottom: 1px solid #dddada;
      margin-bottom: 0;
      line-height: 80px;

      @media (max-width: 300px) {
        height: 100px;
        line-height: 50px;
        text-align: center;
        padding-left: 0;
      }
    `}
`;
