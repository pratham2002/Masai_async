function runProgram(input){
    input=input.split("\n")
    var n =Number(input[0]);
    var arr = input[1].split(" ").map(Number).sort((a,b)=>a-b)
    var pos=n
    var sum=0;
    for(var i=0;i<n/3;i++){
        sum+=arr[pos-2];
        pos=pos-2
    }
    console.log(sum);
}
runProgram(`6
2 4 1 3 5 6`)