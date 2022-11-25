import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../store/reducers/tasksSlice";
import { Button, styled } from "@mui/material";

export const TodoItem = ({ name, id, completed }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTask(id));
  };
  const onToggle = () => {
    dispatch(toggleTask(id));
  };
  return (
    <li>
      <p style={completed ? { textDecoration: "line-through" } : {}}>{name}</p>
      <MyBtn onClick={onToggle} variant={"outlined"}>
        Complete
      </MyBtn>
      <Button onClick={deleteHandler} variant={"outlined"}>
        Delete
      </Button>
    </li>
  );
};

export const MyBtn = styled(Button)({
  marginRight: "20px",
});
