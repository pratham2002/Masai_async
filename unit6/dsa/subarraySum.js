function runProgram(input) {
  input = input.split("\n");
  const testCases = Number(input[0]);
  var pos = 1;
  for (let i = 0; i < testCases; i++) {
    var operations = input[pos++].split(" ").map(Number);
    var k = operations[1];
    var n = operations[0];
    var arr = input[pos++].split(" ");
    let res = false;
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = i; j < n; j++) {
        sum += arr[j];

        if (sum == k) {
          res = true;
          break;
        }
      }
    }
    res ? console.log("Yes") : console.log("No");
  }
}

runProgram(`3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`);
