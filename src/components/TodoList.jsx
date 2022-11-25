import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} {...task} />
      ))}
    </ul>
  );
};
