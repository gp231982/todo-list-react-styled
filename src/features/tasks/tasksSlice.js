import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { id: 1, content: "Odbyć podróż dookoła świata", done: false },
      { id: 2, content: "Polecieć samolotem", done: true },
    ],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload : task }) => {
      tasks.push(task);
    },
    
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },

    toggleTaskDone: ({tasks}, {payload : clickedToggleTaskDoneButtonId}) => {
      const index = tasks.findIndex((task) => task.id === clickedToggleTaskDoneButtonId);
      tasks[index].done = !tasks[index].done;
    },

    setAllDone: ({tasks}) => {
      tasks.forEach((task) => (task.done = true));
    },

    removeTask: ({tasks}, {payload : clickedRemoveTaskButtonId}) => {
      const index = tasks.findIndex((task) => task.id === clickedRemoveTaskButtonId);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
} = tasksSlice.actions;
const selectTasksState = (state) => state.tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone
export const selectTasks = (state) => selectTasksState(state).tasks
export default tasksSlice.reducer;
