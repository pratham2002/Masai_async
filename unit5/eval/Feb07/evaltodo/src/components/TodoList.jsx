function TodoList({value,handleDelete}){

    return(
        <>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",width:"30%",margin:"auto"}}>
            <input type="checkbox"/>
            <h4>{value.title}</h4>
            <input onClick={()=>{
                handleDelete(value)
            }} type="button" style={{margin:"0.5rem",padding:"0.5rem",borderRadius:"0.5rem"}}value="Delete"/>
            </div>
        </>
    )
}

export default TodoList