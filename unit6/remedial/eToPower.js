function runProgram(input){
    input = input.split(" ").map(Number);
    var x =input[0];
    var n =input[1];
    var sum=0.0000
    for(var i=0;i<=n;i++){
        var facto = fact(i)
        sum+=(x**i)/facto
    }
    console.log(sum.toFixed(4));


}

function fact(n){
    if(n==0){
        return 1
    }
    else{
        return n*fact(n-1)
    }
}
runProgram(`4 2`)