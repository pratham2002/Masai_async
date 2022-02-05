function runProgram(input){
    input = Number(input);
    let tn =0,level=0;
    while(tn<=input){
        level++;
        for(let i=0;i<=level;i++){
            tn+=i
        }
    }
    console.log(level-1);

}

runProgram(`30`)