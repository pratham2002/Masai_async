function runProgram(input){
input = input.split("\n")
const days = Number(input[0]);
let Y = weeksLong(input)
let daysDetails=[];
for(let i =1;i<=days;i++){
    let arr = [...input[i]]
    // console.log(arr);
    let inDay=[]
    let count=0
    for(var j=0;j<arr.length;j++){
        if(arr[j]=="C"){
            count++
        }
        else{
            if(count>0){
                inDay.push(count)
            }
            count=0
        }
    }
    console.log(Math.max(inDay));
    daysDetails.push(Math.max(...inDay))
}
let maxInADay=Math.max(...daysDetails)
console.log(`${maxInADay} ${Y}`);
}
function weeksLong(input){
const days = Number(input[0]);
    let weeks=[];
    for(let i = 1;i<=days;i++){
        weeks=[...weeks,...input[i]]
    }
    let c= "C"
    let res=[];
    let count=0;
    for(let i=0;i<weeks.length;i++){
        if(weeks[i]==c){
            count++
        }
        else{
            if(count>0){
                res.push(count)
            }
            count=0;
        }
    }
    return Math.max(...res)
}

runProgram(`4
SSSSEEEECCCCEECCCC
CCCCCSSSSEEECCCCSS
SSSSSEEESSCCCCCCCS
EESSSSCCCCCCSSEEEE`)