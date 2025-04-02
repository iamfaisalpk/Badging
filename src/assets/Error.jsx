// import React from 'react'

// const Error = () => {
// return (
//     <div>
//     try again later
//     </div>
// )
// }

// export default Error


import { useEffect, useRef, useReducer, useMemo, useCallback } from "react";


const initialState = { time: 0, running: false };

function reducer(state, action) {
switch (action.type) {
        case "START":
    return { ...state, running: true };
        case "PAUSE":
    return { ...state, running: false };
        case "RESET":
    return { time: 0, running: false };
        case "TICK":
    return state.running ? { ...state, time: state.time + 1 } : state;
        default:
    return state;
}
}

function Stopwatch() {
const [state, dispatch] = useReducer(reducer, initialState);
const highlight = useRef(null);

useEffect(() => {
    if (!state.running) return;
    const timer = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(timer);
}, [state.running]);

const handleChange = useCallback(() => {
    highlight.current.focus();
}, []);

const formatTime = useMemo(() => {
    return new Date(state.time * 1000).toISOString().substr(11, 8);
}, [state.time]);

return (
    <div className="flex justify-center gap-3">
    <h2>{formatTime}</h2>
    <button onClick={() => dispatch({ type: "START" })} ref={highlight}>
        {state.time > 0 && !state.running ? "Resume" : "Start"}
    </button>
    <button onClick={() => dispatch({ type: "PAUSE" })} onChange={handleChange}>
        Pause
    </button>
    <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
    </button>
    </div>
);
}

export default Stopwatch;



