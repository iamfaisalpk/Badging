import React, { useEffect, useState } from 'react'
import FetchData from './FetchData'

const FetchUser = () => {
    const [data,setData]= useState([])

    useEffect(()=>{
        fetch("http://localhost:4040/user")
        .then((res)=> res.json() )
        .then((data)=> setData(data.slice(0,10)))
        .catch((error)=> console.log("error fetching data:", error))
    },[])
return (
    <div>
    <h2>Fetched data</h2>
    <FetchData items={data}/>
    </div>
)
}

export default FetchUser
