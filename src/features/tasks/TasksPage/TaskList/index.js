import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice.js";
import { List, Item, Button, TaskSpan, StyledLink } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { useQueryParameter } from "../queryParameters.js";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  const query = useQueryParameter(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  console.log(tasks);

  return (
    <List>
      {tasks.map((task) => (
        <Item hidden={hideDone && task.done} key={task.id}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
            {task.done ? <i className="fa-solid fa-check"></i> : null}
          </Button>
          <TaskSpan done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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
