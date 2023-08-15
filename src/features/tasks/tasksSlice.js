import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },

    toggleTaskDone: ({ tasks }, { payload: clickedToggleTaskDoneButtonId }) => {
      const index = tasks.findIndex(
        (task) => task.id === clickedToggleTaskDoneButtonId
      );
      tasks[index].done = !tasks[index].done;
    },

    setAllDone: ({ tasks }) => {
      tasks.forEach((task) => (task.done = true));
    },

    removeTask: ({ tasks }, { payload: clickedRemoveTaskButtonId }) => {
      const index = tasks.findIndex(
        (task) => task.id === clickedRemoveTaskButtonId
      );
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: exampleTasks }) => {
      state.tasks = exampleTasks;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

const selectTasksState = (state) =>
  state.tasks; /*zwraca stan slica o nazwie name: tasks; 
  jeśli tnam by było np. zadania to wtedy zwraca state.zadania*/
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectTasks = (state) => selectTasksState(state).tasks;

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);
/* bez destruktyrzacji  .find(task => task.id === taskId) */

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);
  if (!query || query.trim() === "") {
    return tasks;
  }

  return selectTasks(state).filter((task) =>
    task.content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
