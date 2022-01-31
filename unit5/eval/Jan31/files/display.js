export default function displayData(res){
    console.log(res);
    let resDiv = document.createDocumentFragment()
    for (let x of res) {
            const {book,author,id,comments} = x
            let div = document.createElement("div")
            div.className = "resultsDiv"
            let name = document.createElement("h3")
            name.textContent = `Book : ${book}`
            let authorN = document.createElement("h5")
            authorN.textContent = `Author : ${author}`
            let comment = document.createElement("p")
            comment.textContent = `comments: ${[...comments]}`
            div.append(name,authorN,comment)
            resDiv.appendChild(div)
    }

    return resDiv;

}