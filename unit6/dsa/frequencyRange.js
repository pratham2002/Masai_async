function runProgram(input){
    input = input.split("\n")
    var firstLine = input[0].split(" ")
    var q = Number(firstLine[1])
    var arr = input[1].split(" ").map(Number)
    var pos=2
    for (let index = 0; index < q; index++) {
        const element = input[pos++].split(" ");
        var [left,right,value] = element;
        var newArr = arr.slice(--left,right)
        var count=0
        for(var i = 0;i<newArr.length;i++){
            if(newArr[i]==value){
                count++
            }
        }
        console.log(count);
    }

}

runProgram(`6 2
1 5 3 2 3 2 
3 6 2
4 4 2`)