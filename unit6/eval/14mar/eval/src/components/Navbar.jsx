import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
      <div style={{display:"flex",justifyContent:"space-evenly",fontSize:"25px"}}>
    <Link to="/addAdd">Add</Link>
    <Link to="/address">Address</Link>
        </div>
  )
}

