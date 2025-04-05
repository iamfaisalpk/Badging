import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password ,setPassword] =  useState('')


    
    const handleLogin = (e)=>{
        e.prev()
        axios.get(`http://localhost:4040/user?email=${email}&password=${password}`)
        .then(res => {
            if(res.data.length > 0){
                alert('login succecfull')
            }else{
                alert ('email/password wrong')
            }
        })
    }

return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <input type="email" 
            placeholder='email'
            value={email}
            onChange={e => setEmail(e.target.value)}/> <br />
            <input type="password"  
            placeholder='password'
            value={password}
            onChange={e => setPassword(e.target.value)}/>
            <button type='sumbit'>Login</button>
        </form>
    </div>
)
}

export default Login
