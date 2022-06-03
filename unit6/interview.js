import react from 'react'
export default function Button({value,handleClick}){
    
    
    return(
        <button value={value} onClick={handleClick}/>
    )
}