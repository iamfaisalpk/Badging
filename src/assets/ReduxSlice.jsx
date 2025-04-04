import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
name: "todos",
initialState: [],
reducers: {
    addTodo: (state, action) => {
    state.push({ id: Date.now(), text: action.payload });
    },
    removeTodo: (state, action) => {
    return state.filter(todo => todo.id !== action.payload);
    },
},
});


export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const countSlice = createSlice({
//     name: "product",
//     initialState: {
//         value: "apple"
//     },
//     reducers: {
//         setChange: (state, action) => {
//             state.value = action.payload;
//         }
//     }
// });

// export const { setChange } = countSlice.actions;
// export default countSlice.reducer;
