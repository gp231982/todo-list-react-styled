import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { NewTaskForm, NewTaskInput, NewTaskButton } from "./styled.js";
import { addTask } from "../tasksSlice.js";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    inputRef.current.focus()
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
