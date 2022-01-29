function runProgram(input){
input = input.split("\n")
const textCases = Number(input[0])
var pos=1
for(let i = 0 ; i<textCases;i++){
    var tmp = input[pos++].split(" ").map(Number)
    var n = (1/tmp[0])
    var m = tmp[1]
    // console.log(`n=${n}`);
    console.log(`m**n=${m**n}`);
    console.log(Math.floor(m**n));
 console.log("round",Math.round(m**n));   
}
}

runProgram(`4
5 26
10 32
2 25
6 67`)