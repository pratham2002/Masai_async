function runProgram(input){
    input = input.split("\n")
    var numberOfOperation = Number(input[0]);
    var stackQueue = new Array();
    for(var i =1 ; i<=numberOfOperation;i++){
        var operation = input[i].split(" ")
        var opPerform = operation[0];
        switch (opPerform) {
            case "PUSH":
                stackQueue.push(operation[1])
                // console.log(stackQueue);
                break;
            case "POP":
                if(stackQueue.length===0){
                    console.log("Empty!")   
               }
                if(stackQueue.length>0){
                    stackQueue.pop()
                }
                break;
            case "MIN":
                var tmp = [...stackQueue]
                tmp.sort((a,b)=>a-b)
                console.log(tmp[0]);
                break;
            default:
                break;
        }     

    }
}

runProgram(`11
PUSH 5
PUSH 7
PUSH 3
PUSH 8
PUSH 10
MIN
POP
POP
MIN
POP
MIN`)