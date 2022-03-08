function runProgram(input){
    input = input.split("\n")
    const testCases = Number(input[0])
    var pos =1;
    for(var i =0;i<testCases;i++){
        var n = Number(input[pos++])
        var arr = input[pos++].split(" ").map(Number);
        var arr2=[];
        for(var j=0;j<n;j++){
            var count = 0;
            var tmp = arr[j];
            for(var k=j+1;k<n;k++){
                var tmp2 = arr[k]
                if(k==n){
                    arr2.push(0)
                }else{
                    if(tmp2<tmp){
                        count++
                    }
                }
            }
            arr2.push(count)

        }
        console.log(arr2.join(" "));
    }

}

runProgram(`1
4
5 2 6 1`)