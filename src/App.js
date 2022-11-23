import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
