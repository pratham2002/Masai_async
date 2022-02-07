import { useState } from "react"

function TodoInput(){
    const [text,setText] = useState("")
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    return(
        <>
        <div>
             <input
                type="text"
                placeholder="Add to List"
                value={text}
                onChange={handleChange}
      />
      <button onClick={()=>console.log(text)}>ADD</button>
    </div>
        </>
    )
}

export default TodoInput