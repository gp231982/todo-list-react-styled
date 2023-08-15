import Section from "../../../common/Section";
import AppHeader from "../../../common/AppHeader";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <AppHeader title="Szczegóły zadania" />
      <Section
        sectionClassName="addTaskSection"
        headerClassName="addTaskSection__header"
        title={task ? task.content : "Nie znaleziono zadania 😥"}
        extraHeaderContent={
          <p style={{ padding: "20px" }}>
            <strong>Ukończono:</strong> {task.done ? "tak" : "nie"}
          </p>
        }
      />
    </Container>
  );
}

export default TaskPage;
