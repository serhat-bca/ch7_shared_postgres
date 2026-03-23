import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import todoApi from "./api/todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await todoApi.getTodos();
      setTodos(response);
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todo App</h2>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
