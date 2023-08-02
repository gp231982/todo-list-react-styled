import React from "react";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import TaskList from "./TaskList";
import AppHeader from "../../common/AppHeader";
import Container from "../../common/Container";
import TasksSectionNav from "../../TasksSectionNav";
import TasksSectionNavHeader from "../../TasksSectionNavHeader";



function Tasks() {

  return (
    <Container>
      <AppHeader />
      <Section
        sectionClassName="addTaskSection"
        headerClassName="addTaskSection__header"
        title="Dodaj nowe zadanie"
        extraHeaderContent={null}
        children={<Form />}
      />
      <Section
        sectionClassName="tasksSection"
        extraHeaderContent={
          <TasksSectionNav>
            <TasksSectionNavHeader />
            <Buttons />
          </TasksSectionNav>
        }
        children={<TaskList />}
      />
    </Container>
  );
}

export default Tasks;
