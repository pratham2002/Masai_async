// // Find Peak Element
// // A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// // Note : You may imagine that nums[-1] = nums[n] = -∞.
// // array = [1,2,3,1]
// // out:2

// let arr = [1,2,3,1];
// var peak = 0;
// for(var i=0;i<arr.length;i++){
//         if(i==0 || i ==arr.length-1){
//             continue
//         }
//         if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
//             peak = i
//         }
//     }
// console.log(peak)
    
// Check whether two given strings X and Y of sizes N and M respectively are anagram of each other or not.
// input: N = 4, X = abcd, M = 4, Y = dacb
//out:yes

let n=4,m=4,x='abcd',y='dcab';
if(n!=m){
    console.log("No")
}
else{
    x=x.split("").sort().join("")
    y=y.split("").sort().join("");
    // console.log(x,y);
    if(x===y){
        console.log("Yes")
    }
    else{
        console.log("No");
    }
}















