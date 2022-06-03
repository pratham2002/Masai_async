function runProgram(input) {
    input = input.split("\n");
    const numberOfGroups = Number(input[0])
    var arr = input[1].split(" ").map(Number).sort((a,b)=>b-a)
    // console.log(arr);
    var sum=0;
    for(var i = 0 ; i<numberOfGroups;i++){
        sum+=arr[i]
    }
    console.log(sum);
}

runProgram(`2
1 3 1 2`)