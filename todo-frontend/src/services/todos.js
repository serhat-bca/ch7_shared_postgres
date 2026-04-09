import axios from "axios";
const TODO_API = "/api/todos";

const getTodos = async () => {
  const response = await axios.get(TODO_API);
  return response.data;
};

const createTodo = async (todo) => {
  const response = await axios.post(TODO_API, todo, {
    withCredentials: true,
  });
  return response.data;
};

export default { getTodos, createTodo };
