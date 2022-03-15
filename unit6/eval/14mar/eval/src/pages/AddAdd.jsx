import React, { useState } from 'react'
import{ v4 as uuid} from "uuid"

export default function AddAdd() {
    const [add,setAdd]=useState({})
    const handleChange=(e)=>{
        const {name,value} = e.target
        // console.log("name",name,"val",value);
        setAdd({
            id:uuid(),
            ...add,
            [name]:value
        }) 
    }
    const handleSubmit=(e)=>{
        // e.preventDefault()
        fetch("http://localhost:8000/api/addresses",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(add)
        })
        setAdd({})
    }

  return (
    <div>AddAdd
    <form onSubmit={handleSubmit}>
        <div>
        <label>Flat No. / floor</label> 
        <input name='flatNo' onChange={handleChange}/>
        </div>
        <div>
        <label>Street</label> 
        <input name='street' onChange={handleChange}/>
        </div>
        <div>
        <label>Landmark</label>
        <input name='landmark' onChange={handleChange}/>
        </div>
        <div>
        <label>Area / Locality</label>
        <input name='area' onChange={handleChange}/>
        </div>
        <div>
        <label>Pincode</label> 
        <input name='pincode' onChange={handleChange}/>
        </div>
        <input type="submit"/>
    </form>
    </div>
  )
}
