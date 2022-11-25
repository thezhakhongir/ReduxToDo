import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addTask } from "../store/reducers/tasksSlice";
import { MyBtn } from "./TodoItem";

export const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    const newTask = {
      id: Math.random().toString(),
      name: value,
      completed: false,
    };
    e.preventDefault();
    if (value.trim().length === 0) {
      toast.error("Please enter a new task!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setValue("");
      dispatch(addTask(newTask));
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add task"
      />
      <MyBtn type="submit" variant={"outlined"}>
        Add Task
      </MyBtn>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  );
};
