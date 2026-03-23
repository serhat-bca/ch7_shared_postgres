import axios from "axios";

const TODO_URL = "/api/todos";

const getTodos = async () => {
  const response = await axios.get(TODO_URL);
  return response.data;
};

export default { getTodos };
