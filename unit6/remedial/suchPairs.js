function runProgram(input){
    input = input.split("\n");
    const testCases = Number(input[0]);
    var pos=1
    for(let i = 0;i<testCases;i++){
        var inputDetails = input[pos++].split(" ").map(Number);
        var compare = inputDetails[1];
        var n =inputDetails[0];
        var arr = input[pos++].split(" ").map(Number);
        arr.sort((a,b)=>a-b)
        var present =-1;
        for(let j =0;j<n;j++){
            var num1 = arr[j];
            for(k=j+1;k<n;k++){
                var num2= arr[k];
                if(num1+num2 == compare){
                    present = 1
                    break;
                }
            } 
            if(present==1){
                break;
            }
        } 
        console.log(present)
    }

}

runProgram(`1
5 2
3 4 0 3 7`)