import React, { useState } from 'react'

const Reusable = ({label,placeholder}) => {
    const [show,setShow] = useState(false)

    const ShowButton =({show,onToggle}) =>(
        <button onClick={onToggle}>
            {show ? "hide" : "show"}
        </button>
    )

return (
    <div>
        <label>{label}</label>
        
        {/* input + button */}
        <div>
            <input type={show ? "text" : "password"}
            placeholder={placeholder} />
            <ShowButton
            show={show}
            onToggle={()=> setShow(!show)}
            />

        </div>
    </div>
)
}

export default Reusable
