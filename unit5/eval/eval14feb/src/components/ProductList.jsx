import { useEffect, useState } from "react"
import ProductListItem from "./ProductListItem"

export default function ProductList() {
    const [data,setData]=useState([])
    

    useEffect(()=>{
        fetch("http://localhost:3001/products")
           .then(res=>res.json())
           .then(res=>{
               setData(res)
           })
    },[])
  return (
      <>
    <div>ProductList</div>
    {data?.map((e)=>{
         return <ProductListItem key={e.id} data={e}/>   
    })}
      </>
  )
}
