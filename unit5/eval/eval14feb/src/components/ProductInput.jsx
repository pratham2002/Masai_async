import React from 'react'

function ProductInput({data,handleSubmit,handleChange}) {
  return (
      <>
    <br />
    <div>Enter New Product Details</div>
    <br />
    <form onSubmit={handleSubmit}>
        <div>
            <label name="title">Title of the Product:</label>
            <input name="title" value={data.title} type="text" onChange={handleChange} placeholder='Title?'/>
        </div>
        <div>
            <label name="cost">Cost of The Product:</label>
            <input name="cost" type="number" value={data.cost} onChange={handleChange} placeholder='Cost?'/>
        </div>
        <div>
            <label name="url">Url (https://*):</label>
            <input  name="image" type="url" value={data.image} onChange={handleChange} placeholder='Url?'/>
        </div>
        <div>
            <label name="category">Category:</label>
            <input type="text"  name="category" value={data.category} onChange={handleChange} placeholder='Category?'/>
        </div>
        <div>
            <input type="submit"/>
        </div>
    </form>
      </>
  )
}

export default ProductInput