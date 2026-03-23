import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import todoService from "./services/todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // helper async function
    const fetchTodos = async () => {
      const res = await todoService.getTodos();
      setTodos(res);
    };
    // call that helper async here
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
