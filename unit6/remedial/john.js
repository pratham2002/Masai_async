function runProgram(input){
    input = input.split("\n");
    const testCases = Number(input[0])
    var pos=1;
    for(var i = 0;i<testCases;i++){
        pos++;
        var arr1 = input[pos++].split(" ").map(Number)
        pos++;
        var arr2 = input[pos++].split(" ").map(Number)
        var arr = [...arr1,...arr2].sort((a,b)=>a-b)
        var tmpArr =new Array()
        for(var j = 0;j<arr.length;j++){
            if(arr[j]!=arr[j+1]){
                tmpArr.push(arr[j])
            }
        }
        
        console.log(tmpArr.join(" "));
        
    }

}

runProgram(`1
4
1 2 3 4
5
1 2 3 4 5`)