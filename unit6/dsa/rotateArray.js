function runProgram(input){
input = input.split("\n")
const testCases = Number(input[0]);
var pos =1
for(let i=0;i<testCases;i++){
    var operations = input[pos++].split(" ").map(Number)
    var rotation = operations[1];
    var arr = input[pos++].split(" ")
    while(rotation>0){
        var temp = arr.pop()
        arr.splice(0,0,temp)
        rotation--
    }
    console.log(arr.join(" "));
}

}

runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`)