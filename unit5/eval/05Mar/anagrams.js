function runProgram(input) {
    input = input.split("\n")
    const testCases = Number(input[0])
    var pos=1
    for(var i=0;i<testCases;i++){
        const n = Number(input[pos++])
        var arr = input.slice(pos,n+pos)
        pos+=n
        var arr2=[]
        for(var j=0;j<n;j++){
            var tmp = arr[j].split("").sort().join("")
            arr2.push(tmp)
        }
        var arrTmp2 =[]
        for(var j = 0;j<n;j++){
            var tmp = arr2[j];
            var count=0
            var arrTmp=[];
            for(var k=j;k<n;k++){
                // console.log(isNaN(Number(arr2[k])));
                if(isNaN(Number(arr2[k]))){

                    var tmp2 = arr2[k];
                    if(tmp2==tmp){
                        arr2[k]=Math.random().toFixed(4)
                        count++
                        arrTmp.push(k)
                    }
                }
                }
            if(count>0){
                var ans=[count]
                for(var z =0;z<count;z++){
                    var tmp = arrTmp[z]
                    ans.push(arr[tmp])
                }
                ans.map((e)=>console.log(e))
            }

        }
    }
}

runProgram(`2
6
eat
tea
tan
ate
nat
bat
3
abc
abc
def`)