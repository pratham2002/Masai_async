import React from 'react'

export default function ProductListItem({data}) {
  return (
    <div style={{alignItems:"center",gap:"1rem",display:"flex"}}>
        <div>
            <img src={data.image} alt={data.title} />
        </div>
        <div style={{alignItems:"center",gap:"1rem",display:"flex",flexDirection:"column"}}>

            <h3>{data.title}</h3>
            <span>{data.cost}</span>
            <span>{data.category}</span>
        </div>
        
    </div>
  )
}
