function getMin(arr, sum)
{
    let sumMin = -1;  
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] + arr[j] < sum){
                if(arr[i]+arr[j]>sumMin){
                    sumMin = arr[i]+arr[j]
                }
            }
 
    return sumMin; 
}

function runProgram(input){
input = input.split("\n")
const testCases = Number(input[0])
var pos =2;
for(var i = 0 ;i<testCases;i++){
    // console.log(pos);
    var arr = input[pos++].split(" ").map(Number)
    var sum = Number(input[pos++])
    pos++
    console.log(getMin(arr,sum))
}
}

runProgram(`3
6
1 7 6 4 8 4
7
1
2
3
6
5 3 8 2 1 9
5`)