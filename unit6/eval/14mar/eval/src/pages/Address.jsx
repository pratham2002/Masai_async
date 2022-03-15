import React, { useEffect, useState } from 'react'

export default function Address() {
    const [address,setAddress] = useState([])
    const handleDelete=(id)=>{
        window.location.reload()
        fetch(`http://localhost:8000/api/addresses/${id}`,{
            method:"DELETE"
        })
    }
    useEffect(()=>{
        fetch("http://localhost:8000/api/addresses")
        .then(res=>res.json())
        .then(res=> setAddress(res))
        .catch(err=>console.log(err))
    },[])
    // console.log(address)
  return (
    <div>Address
    {address?.map(e=>{  
        console.log(e);
       return(
           <div id ={e.id}>
               Flat No: {e.flatNo}
               Area : {e.area}
               Street: {e.street}
               LandMark : {e.landmark}
               Pincode : {e.pincode}
               <button>Edit</button>
               <button onClick={()=>{handleDelete(e.id)}}>Delete</button>

           </div>
       ) 
        
    })}
    </div>
  )
}
