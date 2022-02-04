let arr =new Array();
let input ="iloveprogramming"
arr =[...input]
console.log(arr);
var str=[];
for(let i = 0;i<arr.length;i++){
    let tmp = arr[i];
    for(let j =i+1;j<arr.length;j++){
            if (arr[j]==tmp){
                arr[j]=""
            }   
        }
}

arr = arr.filter((e)=> e!=0)
console.log(arr.join(""));
arr[2]
console.log(arr.join(""));