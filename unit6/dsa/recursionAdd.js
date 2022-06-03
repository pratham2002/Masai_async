function runProgram(input) {
    input=input.split("\n")
    const testCases = Number(input[0])
    var pos=1
    for (var i =0;i<testCases;i++){
        var n = Number(input[pos++]);
        var arr = input[pos++].split(" ").map(Number)
        const result = sum(arr,n,0)
        console.log(result);
    }
}

function sum(arr,n,index){``
    if (index == n) {
        return 0
    }
    else{
        return arr[index]+sum(arr,n,index+1)
    }
}

runProgram(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`)