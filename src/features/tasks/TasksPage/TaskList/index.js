import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice.js";
import searchQueryParamName from "../searchQueryParamName.js";
import { List, Item, Button, TaskSpan } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const TaskList = () => {
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  console.log(tasks);

  console.log(location);
  console.log(location.search);
  console.log(location.pathname);
  console.log(location.hash);

  return (
    <List>
      {tasks.map((task) => (
        <Item hidden={hideDone && task.done} key={task.id}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
            {task.done ? <i className="fa-solid fa-check"></i> : null}
          </Button>
          <TaskSpan done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </TaskSpan>
          <Button onClick={() => dispatch(removeTask(task.id))} remove>
            <i className="fa-regular fa-trash-can"></i>
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
