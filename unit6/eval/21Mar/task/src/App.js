import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const getTask=()=>{
    fetch("http://localhost:8000/task")
      .then((res) => res.json())
      .then((res) => setTask(res));
  }
  const initValue ={
    "title":"",
    "subTask":""
  }
  const [task, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState(initValue)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskInput({
      ...taskInput,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      fetch("http://localhost:8000/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskInput),
      })
      .then(e=>console.log("okay"))
      setTaskInput(initValue)
      getTask()
    
  };
  const handleDelete=(id)=>{
    fetch(`http://localhost:8000/task/${id}`,{
      method:"DELETE"
    })
    getTask()
  }

  useEffect(() => {
    getTask()
  }, []);
  return (
    <div style={{ fontSize: "25px", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input autoFocus type="text" value={taskInput.title} onChange={handleChange} name="title" />
        </div>
        <div>
          <label>SubTask: </label>
          <input type="text" value={taskInput.subTask} onChange={handleChange} name="subTask" />
        </div>
        <input type="submit" />
      </form>
      <hr/>
      <a href="/"><button onClick={getTask}>Home</button></a>
      <hr />
      <h1 style={{ margin: "auto",padding:"0.5rem",width: "fit-content" }}>Task</h1>
      <table style={{border:"1px solid balck"}}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Status</td>
            <td>SubTask</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {task?.map((e)=>{
            return(
              <tr key={e._id}>
                <td>
                    <a href={`/${e._id}`}>{e._id}</a>
                </td>
                <td>
                    {e.title}
                </td>
                <td>
                    {e.status?"Completed":"Pending"}
                </td>
                <td>
                    {e.subTask? e.subTask:"Not SubTask"}
                </td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={()=>handleDelete(e._id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
