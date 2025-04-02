import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./ReduxSlice"; 

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    if (input.trim()) {
      dispatch(addTodo(input)); 
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full"
      />
      <button onClick={addTask} className="bg-blue-500 text-white p-2 mt-2 w-full">
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
