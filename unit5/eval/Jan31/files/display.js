export default function displayData(res){
    console.log(res);
    for (let x of res) {
        
            const {book,author,id,comments} = x
            console.log(book,author,comments);
        
    }
}