// import React, { useState } from 'react'
// import axios from 'axios'

// const Login = () => {
//     const [email,setEmail] = useState('')
//     const [password ,setPassword] =  useState('')


//     const handleLogin = (e)=>{
//         e.prev()
//         axios.get(`http://localhost:4040/user?email=${email}&password=${password}`)
//         .then(res => {
//             if(res.data.length > 0){
//                 alert('login succecfull')
//             }else{
//                 alert ('email/password wrong')
//             }
//         })
//     }

// return (
//     <div>
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//             <input type="email" 
//             placeholder='email'
//             value={email}
//             onChange={e => setEmail(e.target.value)}/> <br />
//             <input type="password"  
//             placeholder='password'
//             value={password}
//             onChange={e => setPassword(e.target.value)}/>
//             <button type='sumbit'>Login</button>
//         </form>
//     </div>
// )
// }

// export default Login

import React, {  useEffect, useMemo, useReducer,  } from 'react'

const initialState = {time : 0,  running :false}

    const reducer = (state,action)=>{
        switch (action.type) {
            case "Start" :
                return {...state, running : true}
            case "Pause" :
                return {...state, running : false}
            case "Reset" :
                return {time: 0, running : false}
            case "TICK" :
                return state.running ? {...state, time: state.time + 1} : state;
            default :
            return state;
        }
    }

const Stopwatch = () => {
    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        if(!state.running) return;
        const timer  = setInterval(()=> dispatch({type : "TICK"}), 1000);
        return () => clearInterval(timer);
    }, [state.running])

    const formatTime = useMemo (()=>{
        return new Date(state.time * 1000).toISOString().substr(11,8);
    }, [state.time])

    // const handleChange = useCallback(()=>{
    //     highlight.current.focus()
    // },[])


return (
    <div>
    <h2>{formatTime}</h2>

    <button onClick={()=> dispatch ({type : "Start"})}>
        {state.time > 0 && !state.running ? "Resume" : "Start"}
        </button>

        <button onClick={()=> dispatch({type : "Pause"})}>
            Pause
        </button>

        <button onClick={()=> dispatch({type : "Reset"})}>
            Reset
        </button>
    </div>
)
}


export default Stopwatch;


