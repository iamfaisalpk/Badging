// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "./ReduxSlice"; 

// const TodoInput = () => {
// const [input, setInput] = useState("");
// const dispatch = useDispatch();

// const addTask = () => {
//     if (input.trim()) {
//     dispatch(addTodo(input)); 
//     setInput("");
//     }
// };

// return (
//     <div>
//     <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className="border p-2 w-full"
//     />
//     <button onClick={addTask} className="bg-blue-500 text-white p-2 mt-2 w-full">
//         Add Todo
//     </button>
//     </div>
// );
// };

// export default TodoInput;


import { useDispatch, useSelector } from "react-redux";
import { setChange } from "./ReduxSlice";


const ProductSelector = () => {
    const dispatch = useDispatch();
    const prt = useSelector(state => state.product.value);

    const handleChange = (e) => {
        dispatch(setChange(e.target.value));
    };

    return (
        <div>
            <select value={prt} onChange={handleChange}>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
                <option value="Orange">Orange</option>
            </select>
        </div>
    );
};

export default ProductSelector;
