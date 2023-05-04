import { useState } from "react";
import { NewTaskForm, NewTaskInput, NewTaskButton } from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <NewTaskForm onSubmit={onFormSubmit}>
      <NewTaskInput
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia ?"
        onChange={(e) => setNewTaskContent(e.target.value)}
      />
      <NewTaskButton type="submit">Dodaj zadanie</NewTaskButton>
    </NewTaskForm>
  );
};

export default Form;
