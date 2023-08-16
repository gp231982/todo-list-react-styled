import React from "react";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import TaskList from "./TaskList";
import AppHeader from "../../../common/AppHeader";
import Container from "../../../common/Container";
import SectionNav from "../../../SectionNav";
import SectionNavHeader from "../../../SectionNavHeader";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <AppHeader title="Lista zadań" />
      <Section
        sectionClassName="addTaskSection"
        extraHeaderContent={
          <SectionNav sectionClassName="addTaskSection">
            <SectionNavHeader title="Dodaj nowe zadanie" />
            <Buttons sectionClassName="addTaskSection" />
          </SectionNav>
        }
        children={<Form />}
      />
      <Section
        sectionClassName="searchTaskSection"
        extraHeaderContent={
          <SectionNav sectionClassName="searchTaskSection">
            <SectionNavHeader title="Wyszukiwarka" />
          </SectionNav>
        }
        children={<Search />}
      />
      <Section
        sectionClassName="tasksSection"
        extraHeaderContent={
          <SectionNav sectionClassName="tasksSection">
            <SectionNavHeader title="Lista zadań" />
            <Buttons sectionClassName="tasksSection" />
          </SectionNav>
        }
        children={<TaskList />}
      />
    </Container>
  );
}

export default TasksPage;
