let res = 0;
    function checkRecursive(num, x, k, n)
    {
        if (x == 0)
            res++;
          
        let r = Math.floor(Math.pow(num, 1.0 / n));
  
        for (let i = k + 1; i <= r; i++) {
            let a = x - Math.pow(i, n);
          if (a >= 0)
            checkRecursive(num,
                   x - Math.pow(i, n), i, n);
        }
        return res;
    }
      
function runProgram(input)
{
    input = input.split(" ").map(Number)
    var [x,n] = input
    console.log(checkRecursive(x, x, 0, n))
}

runProgram(`10 2`)