import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div >
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
