import React from "react";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import TaskList from "./TaskList";
import AppHeader from "../../../common/AppHeader";
import Container from "../../../common/Container";
import TasksSectionNav from "../../../TasksSectionNav";
import TasksSectionNavHeader from "../../../TasksSectionNavHeader";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <AppHeader title="Lista zadań" />
      <Section
        sectionClassName="addTaskSection"
        extraHeaderContent={
          <TasksSectionNav sectionClassName="addTaskSection">
            <TasksSectionNavHeader title="Dodaj nowe zadanie" />
            <Buttons sectionClassName="addTaskSection" />
          </TasksSectionNav>
        }
        children={<Form />}
      />
      <Section
        sectionClassName="addTaskSection"
        headerClassName="addTaskSection__header"
        title="Wyszukiwarka"
        extraHeaderContent={null}
        children={<Search />}
      />
      <Section
        sectionClassName="tasksSection"
        extraHeaderContent={
          <TasksSectionNav sectionClassName="tasksSection">
            <TasksSectionNavHeader title="Lista zadań" />
            <Buttons sectionClassName="tasksSection" />
          </TasksSectionNav>
        }
        children={<TaskList />}
      />
    </Container>
  );
}

export default TasksPage;
