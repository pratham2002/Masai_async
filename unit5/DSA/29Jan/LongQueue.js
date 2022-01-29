function runProgram(input){
input =  input.split("\n")
const numberOfpeople = Number(input[0])
const arr = input[1].split(" ").map(Number);
var count =0;
for(let i = 1 ;i <=numberOfpeople;i++){
    if(i==numberOfpeople){
        count++;
    }
    else if(arr[i]>arr[i+1]){
        count++;
    }
}
console.log(count);
}

runProgram(`6
1 4 2 5 3 8`)