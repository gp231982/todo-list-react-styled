import React, { useState } from "react";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "./Section";
import Tasks from "./Tasks";
import AppHeader from "./AppHeader";
import Container from "./Container";
import TasksSectionNav from "./TasksSectionNav";
import TasksSectionNavHeader from "./TasksSectionNavHeader";

import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const { tasks, setAllDone, toggleTaskDone, removeTask, addNewTask } =
    useTasks();

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
