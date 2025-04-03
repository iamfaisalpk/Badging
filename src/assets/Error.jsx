// import React from 'react'



// const Error = () => {
// return (
//     <div>
//     try again later
//     </div>
// )
// }

// export default Error

import { useEffect, useReducer, useRef , useCallback,useMemo } from "react"

const initalState = {time : 0, running : false};

const reducer = (state,action)=>{
    switch (action.type) {
        case "START":
            return {...state, running : true};
        case "PAUSE":
            return {...state,running : false};
        case "RESET" :
            return {...state,running : false};
        case "CLICK" :
            return state.running ? {...state, time:state.time + 1} :state;
        default :
        return state
    } 
}

const Stopwatch = ()=>{
    const [state,dispatch] = useReducer(reducer,initalState)
    const highilight = useRef(null);

    useEffect (()=>{
        if(!state.running) return ;
        const timer = setInterval (()=> dispatch({type : "CLICK"}), 1000);
        return ()=> clearInterval(timer);
    },[state.running])

    const handleChange = useCallback(()=>{
        highilight.current.focus()
    },[])

    const formatTime = useMemo (()=>{
        return new Date(state.time * 1000). toISOString(). substr(11,8)
    },[state.time])

    return(
        <div>
            <h2>{formatTime}</h2>
            <button onClick={()=> dispatch({type : "START"})} ref={highilight}>
                {state.time > 0 && !state.running ? "Resume" : "Start"}
            </button>

            <button onClick={()=> dispatch({ type : "PAUSE"})} onChange={handleChange}>
                pause
            </button>

            <button onClick={()=> dispatch( {type : "RESET"})}>Reset</button>
        </div>
    )
};

export default Stopwatch;



