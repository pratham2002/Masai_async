import { useState } from "react"
import TodoInput from "./TodoInput"

function Todo(){
    const[todos,setTodos] = useState([])
    const handleCreateTodo = (value)=>{
        setTodos([...todos,value])
    }
    return(
        <>
        <h2>Todo</h2>
        <TodoInput/>
        </>
    )
}

export {Todo}