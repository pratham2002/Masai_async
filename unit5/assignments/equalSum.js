function runProgram(input){
    input = input.split(" ").map(Number);
    let [a,b,c,d] = [...input]
    if(a+b == c+d){
        console.log("Yes");
    }
    else if(a+c == b+d){
        console.log("Yes");
    }
    else if(a+d==b+c){
        console.log("Yes");
    }
    else{
        console.log("No");
    }

}

runProgram(`2 5 7 6`)