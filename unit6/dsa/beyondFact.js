function runProgram(input){
    input = Number(input)
    console.log(Math.log(facto(input)).toFixed(4))

}

function facto(n){
    if (n==1){
        return 1
    }
    else if(n==0){
        return 1
    }
    else{
        return n*facto(n-1)
    }
}
runProgram(`3`)