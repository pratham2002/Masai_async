import React, { useState } from 'react'

export default function Login() {
    const [data,setData]= useState({});
    
const handleChange=(e)=>{
    const {name,value} = e.target;
    setData({
        ...data,
        [name]:value
    })
}
const handleSubmit=()=>{
    try{
        fetch("http://localhost:8000/auth/login",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>{
            localStorage.setItem("token",res.token)
        })

        
    }
    catch(e){
        console.log(e);
    }
}
  return (
    <div>
        <h2>Login</h2>
        <input type="text" onChange={handleChange} name ="email" placeholder='email' />
        <input type="password" onChange={handleChange} name="password" placeholder='password' />
        <input type="submit" onClick={handleSubmit} />
    </div>
  )
}

