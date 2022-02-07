import { useState } from "react"

function TodoInput({handleCreateTodo}){
    const [text,setText] = useState("")
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleAdd=()=>{
        handleCreateTodo(text.toLocaleUpperCase())
        setText("")
    }
    return(
        <>
        <div>
             <input
                autoFocus="True"
                type="text"
                placeholder="Add to List"
                value={text}
                onChange={handleChange}
      />
      <button onClick={()=>handleAdd()}>ADD</button>
    </div>
        </>
    )
}

export default TodoInput