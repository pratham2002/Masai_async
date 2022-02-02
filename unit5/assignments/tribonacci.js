function runProgram(input){
 input = input.split("\n").map(Number);
 const testCases = input[0];
 for(let i =1;i<=testCases;i++){
     const n = input[i];
     var arr = new Array(n+1).fill(0)
    arr[1]=1
    arr[2]=1
    for(let j=3;j<=n;j++){
        arr[j]=arr[j-1]+arr[j-2]+arr[j-3]
    }
     console.log(arr[n]);
 }
}

runProgram(`1
5`)