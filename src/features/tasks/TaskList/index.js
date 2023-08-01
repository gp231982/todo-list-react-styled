import { List, Item, Button, TaskSpan } from "./styled.js";

const TaskList = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
  <List>
    {tasks.map((task) => (
      <Item hidden={hideDone && task.done} key={task.id}>
        <Button
          onClick={() => {
            toggleTaskDone(task.id);
          }}
          toggleDone
        >
          {task.done ? <i className="fa-solid fa-check"></i> : null}
        </Button>
        <TaskSpan done={task.done}>{task.content}</TaskSpan>
        <Button onClick={() => removeTask(task.id)} remove>
          <i className="fa-regular fa-trash-can"></i>
        </Button>
      </Item>
    ))}
  </List>
);

export default TaskList;
