function runProgram(input){
input = input.split("\n");
var tp = input[0].split(" ").map(Number);
var textCases = tp[1];
var n = tp[0];
const arr = input[1].split(" ").map(Number)
// console.log(arr);
var pos =2;
for(let i = 0;i<textCases;i++){
    var left = input[pos++].split(" ").map(Number);
    var right = left[1]-1
    var val = left[2]
    left = left[0]-1
    var count=0;
    for(let i=left;i<=right;i++){
        if(arr[i]==val){
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