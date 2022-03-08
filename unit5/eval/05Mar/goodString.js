function runProgram(input) {
    input = input.split("\n")
    var n = Number(input[0])
    var str = input[1].split("")
    var tmp="",i=0,j=1;
    while(j<n){
        if(str[i]==str[j]){
            j+=1
        }
        else{
            tmp+=str[i]+str[j];
            i=j+1;
            j+=2
        }
    }
    console.log(n-tmp.length)
    console.log(tmp)
}
runProgram(`2
oo`)