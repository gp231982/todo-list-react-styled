import {
  selectTasks,
  selectHideDone,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
} from "../../tasksSlice";
import { Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = ({ sectionClassName }) => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <>
      {sectionClassName === "addTaskSection" ? (
        <Button onClick={() => dispatch(fetchExampleTasks())}>
          Pobierz przykładowe zadania
        </Button>
      ) : null}
      {sectionClassName === "tasksSection" && tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            tasksAllDone={tasks.every((task) => task.done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </>
  );
};

export default Buttons;
