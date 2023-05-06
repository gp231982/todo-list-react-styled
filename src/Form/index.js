import { useState, useRef } from "react";
import { NewTaskForm, NewTaskInput, NewTaskButton } from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <NewTaskForm onSubmit={onFormSubmit}>
      <NewTaskInput
        ref={inputRef}
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia ?"
        onChange={(e) => setNewTaskContent(e.target.value)}
      />
      <NewTaskButton onClick={() => inputRef.current.focus()} type="submit">
        Dodaj zadanie
      </NewTaskButton>
    </NewTaskForm>
  );
};

export default Form;
