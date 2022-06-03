function runProgram(input){
    input = input.split("\n")
    var arr = input[1].split(" ").map(Number);
    var result =new Array();
    for(var i =0;i<arr.length;i++){
        var variable = arr[i];
        var lesser = -1;
        for(var j=i;j>=0;j--){
            if(arr[j]<variable){
                lesser = arr[j]
                break;
            }
        }
        result.push(lesser);
    }
    console.log(result.join(" "));
}   

runProgram(`8
39 27 11 4 24 32 32 1`)