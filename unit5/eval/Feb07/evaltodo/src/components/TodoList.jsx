import { useState } from "react"
import styles from "./TodoList.module.css"

function TodoList({value,handleDelete,handleToggle}){
    const [checked,isChecked] = useState(value.status)
    return(
        <>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",width:"30%",margin:"auto"}}>
            <input type="checkbox" defaultChecked={checked} onChange={()=>{
                isChecked(!checked)
                handleToggle(value)
                }}/>
            <h4 className={checked? styles.striked:""}>{value.title}</h4>
            <input onClick={()=>handleDelete(value)} type="button" style={{margin:"0.5rem",padding:"0.5rem",borderRadius:"0.5rem"}}value="Delete"/>
            </div>
        </>
    )
}

export default TodoList