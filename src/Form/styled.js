import styled from "styled-components";

export const NewTaskForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 767px) {
    padding-bottom: 25px;
  }
`;

export const NewTaskInput = styled.input`
  padding: 10px;
  flex-grow: 1;
  min-width: 75.55px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;

  @media (max-width: 767px) {
    flex-basis: 95%;
    margin-right: 20px;
  }
`;

export const NewTaskButton = styled.button`
  margin-right: 20px;
  margin-left: 20px;
  background-color: #007380;
  color: white;
  padding: 10px 10px;
  border: none;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 767px) {
    flex-basis: 95%;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
