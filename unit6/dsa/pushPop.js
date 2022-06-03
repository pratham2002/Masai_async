function runProgram(input){
    input = input.split("\n")
    var numberOfOperation = Number(input[0]);
    var stackQueue = new Array();
    for(var i =1 ; i<=numberOfOperation;i++){
        var operation = input[i].split(" ").map(Number)
        var opPerform = operation[0];
        switch (opPerform) {
            case 1:
                stackQueue.push(operation[1])
                break;
            case 2:
                if(stackQueue.length>0){
                    stackQueue.pop()
                }
                break;
            case 3:
                if(stackQueue.length===0){
                     console.log("Empty!")   
                }
                else{
                    console.log(stackQueue[stackQueue.length-1])
                }
                break;
            default:
                break;
        }     

    }
}

runProgram(`7
1 15
1 20
1 25
2
3
2
3`)