import { useState } from "react"
import TodoInput from "./TodoInput"
import { v4 as uuid } from 'uuid';
import TodoList from "./TodoList";

function Todo(){
    const[todos,setTodos] = useState([])
    const handleCreateTodo = (value)=>{
        const tmp={
            title:value,
            status:false,
            id:uuid()
        }
        setTodos([...todos,tmp])
    }
    const handleTaskDelete =(item)=>{
        const newList = todos.filter((todo)=> todo.id!==item.id)
        setTodos(newList)
    }

    return(
        <>
        <div>
        <h1>Todo</h1>
        <TodoInput handleCreateTodo={handleCreateTodo}/>
        </div>
        <div style={{marginTop:"30px"}}>
            <h3>All Tasks</h3>
            {todos?.filter((e)=>!e.status).map((e)=>{
                return <TodoList handleDelete={handleTaskDelete} key={e.id} value={e}/>
            })}
            <hr/>
        </div>
        </>
    )
}

export {Todo}