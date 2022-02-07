import { useState } from "react"
import TodoInput from "./TodoInput"
import { v4 as uuid } from 'uuid';
import TodoList from "./TodoList";
import CompletedTodo from "./CompletedTodo";

function Todo(){
    const[todos,setTodos] = useState([])
    const [show,setShow] = useState(false)
    const[tmp,setTmp]=useState(false)
    const handleCreateTodo = (value)=>{
        if (value){
            const tmp={
                title:value,
                status:false,
                id:uuid()
            }
            setTodos([...todos,tmp])
        }
    }
    const handleTaskDelete =(item)=>{
        const newList = todos.filter((todo)=> todo.id!==item.id)
        setTodos(newList)
    }
    const handleToggle =(item)=>{
        todos.forEach((e)=>{
            if(e.id == item.id){
                e.status = !e.status
            }
        })
        setTmp(!tmp)
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
                return <TodoList handleToggle={handleToggle} handleDelete={handleTaskDelete} key={e.id} value={e}/>
            })}
            <hr/>
            <h3 style={{cursor:"pointer"}} onClick={()=>setShow(!show)}>{show ? "Hide Completed ↑":"Show Completed ↓"}</h3>
            {show && todos?.filter((e)=>e.status).map((e)=>{
                return <TodoList handleToggle={handleToggle} handleDelete={handleTaskDelete} key={e.id} value={e}/>
            })}
        </div>
        </>
    )
}

export {Todo}