function runProgram(input) {
    input = input.split("\n");
    const testCases = Number(input[0])
    var pos=1;
    for(var i =0;i<testCases;i++){
        pos++
        var arr1 = input[pos++].split(" ").map(Number)
        pos++
        var arr2 = input[pos++].split(" ").map(Number)
        var arrFiltered = arrayFilter(arr1,arr2)
        console.log(arrFiltered.filter((e)=>e!=0).join(" "))
    }
    }
    
function arrayFilter(arr1,arr2) {
    var len = arr1.length
    var len2 = arr2.length
    
    
    
    
}

runProgram(`1
4
1 2 3 4
5
1 2 3 4 5`)