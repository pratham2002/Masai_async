function runProgram(input){
    input = input.split("\n")
    var numWeeks = Number(input[0]);
    const price =[5*110,2*120,2*42,3*53,2*40,5*32,2*126]
    console.log("price",price);
    var elems = input[1].split(" ").map(Number)
    var costing = 0
    for(let i = 0;i<elems.length;i++){
        if(elems[i]){
            costing+=price[i]
        }
    }
    console.log("costing",costing);
    console.log("costing*4",numWeeks*costing);

}

runProgram(`4
0 1 1 1 0 0 1`)