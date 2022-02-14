import { useEffect, useState } from "react"
import ProductListItem from "./ProductListItem"

export default function ProductList({data}) {
  return (
      <>
    <div>ProductList</div>
    {data?.map((e)=>{
         return <ProductListItem key={e.id} data={e}/>   
    })}
      </>
  )
}
