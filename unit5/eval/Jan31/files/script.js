function fetchBooks(){
    return fetch(`http://localhost:3001/books`)
            .then(res=>res.json())
            // .then(res=>console.log(res))
}

async function printDetails(){
    try{
        let res =await fetchBooks()
        console.log(res);
    }
    catch(err){
        console.error(err)
    }
    
}
printDetails()