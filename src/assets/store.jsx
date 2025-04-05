// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./ReduxSlice"; 

// const store = configureStore({
// reducer: {
//     todos: todoReducer,
// },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import productReducer  from "./ReduxSlice"

const store = configureStore({
    reducer: {
        product: productReducer
    }
});

export default store;

