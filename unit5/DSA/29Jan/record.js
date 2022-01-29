function runProgram(input){
input= input.split("\n");
const testCases = Number(input[0]);
var pos=1;
    for(let i=0;i<testCases;i++){
        let gamesPlayed = Number(input[pos++])
        const score = input[pos++].split(" ").map(Number);
        let highScore=score[0],leastScore = score[0];
        let highBreak=0,lowBreak=0;
        for(let j =0;j<gamesPlayed;j++){
            if(score[j]>highScore){
                highScore=score[j]
                highBreak++;
            }
            else if(score[j]<leastScore){
                leastScore = score[j];
                lowBreak++
            }
        }
        console.log(highBreak+" "+lowBreak);
    }
}

runProgram(`2
9
10 5 20 20 4 5 2 25 1
10
3 4 21 36 10 28 35 5 24 42`)