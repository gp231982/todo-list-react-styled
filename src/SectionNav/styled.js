import styled, {css} from "styled-components";

export const Navigation = styled.nav`
  display: grid;
  /* grid-template-columns: 1fr auto auto; */
  grid-template-rows: 1;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  border-bottom: 1px solid #dddada;

  ${({ sectionClassName }) =>
    sectionClassName === "tasksSection" && css`
      grid-template-columns: 1fr auto auto;
    `}

  ${({ sectionClassName }) =>
    sectionClassName === "addTaskSection" && css`
      grid-template-columns: 1fr auto;
    `}

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    padding-right: 0px;
    padding-left: 0px;
    gap: 10px;
    padding-bottom: 10px;
    text-align: center;
    justify-items: center;
  }
`;
