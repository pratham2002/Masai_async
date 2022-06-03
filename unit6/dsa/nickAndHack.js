function runProgram(input){
        input =input.split("\n").map(Number);
        for(var i =1;i<=input[0];i++){

            var number = input[i]
            console.log(number);
            if(number==1){
                console.log(i,"Yes")
            }
            else if (number%10==1){
                console.log(i,"Yes")
            }
            else if(number%20==1){
                console.log(i,"Yes")
            }
            else{
                console.log(i,"No");
            }
        }
}

runProgram(`5
1
2
10
25
200`)