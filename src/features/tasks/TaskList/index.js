import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice.js";
import { List, Item, Button, TaskSpan } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item hidden={hideDone && task.done} key={task.id}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
            {task.done ? <i className="fa-solid fa-check"></i> : null}
          </Button>
          <TaskSpan done={task.done}>{task.content}</TaskSpan>
          <Button onClick={() => dispatch(removeTask(task.id))} remove>
            <i className="fa-regular fa-trash-can"></i>
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
