import React, { useEffect, useState } from 'react'

export default function Books() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8000/books/")
        .then(res=>res.json())
        .then(res=>setData(res))
      },[])
      console.log(data);
      return (
    <div>
        <h1>Books</h1>
        <ul>
        {data?.map((data)=>{
            return <li>{data.title} - {data.author}</li>
        })}

        </ul>
        </div>
  )
}
