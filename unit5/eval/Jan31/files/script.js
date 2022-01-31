import displayData from "./display.js";

function fetchBooks(){
    return fetch(`http://localhost:3001/books`)
    .then(res=>res.json())
    // .then(res=>console.log(res))
}

export async function printDetails(){
    try{
        let res =await fetchBooks()
        // console.log(res);
        let results = displayData(res)
        console.log(results);
        let output = document.getElementById("result")
        output.append(results)
    }
    catch(err){
        console.error(err)
    }
    
}
export default printDetails()