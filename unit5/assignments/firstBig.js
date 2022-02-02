function runProgram(input){
input = input.split("\n");
const arr = input[1].split(" ").map(Number).sort((a,b)=>a-b)
// console.log("arr",arr);
let pos =2
const q = Number(input[pos++])
for(let i =0;i<q;i++ ){
    const k = Number(input[pos++])
    let big = -1
    for (let j = 0; j < arr.length; j++) {
        if(arr[j]>k){
            big = arr[j]
            break;
        }
    }
    console.log(big);

}

}

runProgram(`10
13 89 81 66 81 63 71 76 73 81
2
65
15`)