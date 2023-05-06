import { useState, useEffect } from "react";

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasksData");
  return tasksFromLocalStorage
    ? JSON.parse(tasksFromLocalStorage)
    : [
        { id: 1, content: "Odbyć podróż dookoła świata", done: false },
        { id: 2, content: "Polecieć samolotem", done: true },
      ];
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("tasksData", JSON.stringify(tasks));
  }, [tasks]);

  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const removeTask = (id) => {
    setTasks((tasks) =>
      tasks.filter((task) => {
        if (task.id !== id) {
          return { ...task };
        }
        return null;
      })
    );
  };

  const addNewTask = (newTaskContent) => {
    if (!newTaskContent) return;
    setTasks([
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  return { tasks, setAllDone, toggleTaskDone, removeTask, addNewTask };
};
