import { useEffect, useState } from "react";
import ProductInput from "./ProductInput";
import ProductList from "./ProductList";
const initVal = {
  title: undefined,
  cost: undefined,
  image: undefined,
  category: undefined
};
export default function Product() {
    const [formData, setFormData] = useState(initVal);
    const onChangeHandle = (e)=>{
        let {name,value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const [data,setData]=useState([])
    
 function handleSubmit (e){
     e.preventDefault()
      fetch("http://localhost:3001/products",{
          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(formData)
      })
      .catch(e=>console.log("error",e))
      setFormData(initVal)
  }
  useEffect(()=>{
    fetch("http://localhost:3001/products")
       .then(res=>res.json())
       .then(res=>{
           setData(res)
       })
},[formData])
  return (
    <>
      <div>Product</div>
      <ProductInput data={formData} handleSubmit={handleSubmit} handleChange={onChangeHandle} />
      <br />
      <br />
      <br />
      <ProductList data={data}/>
    </>
  );
}
