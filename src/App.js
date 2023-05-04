import React, { useState, useEffect } from "react";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "./Section";
import Tasks from "./Tasks";
import AppHeader from "./AppHeader";
import Container from "./Container";
import TasksSectionNav from "./TasksSectionNav";
import TasksSectionNavHeader from "./TasksSectionNavHeader";

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasksData");
  return tasksFromLocalStorage
    ? JSON.parse(tasksFromLocalStorage)
    : [
        { id: 1, content: "Odbyć podróż dookoła świata", done: false },
        { id: 2, content: "Polecieć samolotem", done: true },
      ];
};

function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("tasksData", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

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
    setTasks([
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  return (
    <Container>
      <AppHeader />
      <Section
        sectionClassName="addTaskSection"
        headerClassName="addTaskSection__header"
        title="Dodaj nowe zadanie"
        extraHeaderContent={null}
        children={<Form addNewTask={addNewTask} />}
      />
      <Section
        sectionClassName="tasksSection"
        extraHeaderContent={
          <TasksSectionNav>
            <TasksSectionNavHeader />
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          </TasksSectionNav>
        }
        children={
          <Tasks
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
            hideDone={hideDone}
            tasks={tasks}
          />
        }
      />
    </Container>
  );
}

export default App;
