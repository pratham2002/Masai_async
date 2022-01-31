export default async function Update(comments,id){
            // window.alert(`${comment} Update Clicked`)  
            // window.alert(`${id} Update Clicked`)  
            
            let comment = document.getElementById(`commentInput${id}`).value
            console.log(comment);
            comments.push(comment)
            if(comment){
            let data = {
                    "comments" :[...comments],
            }
            await fetch(`http://localhost:3001/books/${id}`,{
                method:"PATCH",
                headers: {
                    'Content-type': 'application/json'
                  },
                body:JSON.stringify(data),
            });
          }
}
export  async function Add(book,author,comments,id){
            // window.alert(`${comment} Update Clicked`)
            // window.alert(`${id} Update Clicked`)  
            let comment = document.getElementById(`commentInput${id}`).value
                comments.push(comment)
                let data = {
                        "comments" :[...comments],
                }
                await fetch(`http://localhost:3001/books/${id}`,{
                    method:"PATCH",
                    headers: {
                        'Content-type': 'application/json'
                      },
                    body:JSON.stringify(data),
                });
        

}
export  async function Delete(id){
            await fetch(`http://localhost:3001/books/${id}`,{
                method:"DELETE",
                headers: {
                    'Content-type': 'application/json'
                  },
            });
}