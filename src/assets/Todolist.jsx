import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./ReduxSlice"; 

const TodoList = () => {
  const todos = useSelector((state) => state.todos); 
  const dispatch = useDispatch();

  return (
    <ul className="mt-4">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li key={todo.id} className="flex justify-between p-2 border-b">
            {todo.text}
            <button
              onClick={() => dispatch(removeTodo(todo.id))} 
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>No todos available</p>
      )}
    </ul>
  );
};

export default TodoList;
