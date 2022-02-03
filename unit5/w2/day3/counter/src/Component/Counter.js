import React, { useState } from 'react';

export const Counter = () => {
    const [count,setCount] = useState(0)
    

    const handleClick=(val)=>{
        setCount((prev)=>prev+val);
        console.log("count",count);
    }
  return <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={()=>handleClick(1)}>Increment</button>
      <button onClick={()=>handleClick(-1)}>Decrement</button>
</div>;
};
