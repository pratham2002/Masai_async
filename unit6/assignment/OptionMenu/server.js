const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  const books = require("./books.json")
  const fs = require("fs")

  readline.question(`Enter Option (1,2,3)\n1 - Show all books \n2 - Add a new book \n3 - Quit\n\n`, option => {
      if(option == 1){
        fs.writeFileSync("./books.json",JSON.stringify(books))
        console.log(books)
      }
      else if(option == 2){
          readline.question("Name:",(name)=>{
            readline.question("pagecount",(count)=>{
                books.push({name:name,pageCount:count})
                    fs.writeFileSync("./books.json",JSON.stringify(books))
                    readline.close()
            })
          })
      }
      else if (option==3) {
          readline.close()
      }
      else{
          console.log("Wrong");
        fs.writeFileSync("./books.json",JSON.stringify(books))

      }
        // readline.close()}
      
  })
  readline.on('line', (input) => {
    console.log(`Received this: ${input}`);
  });

  