// function myArray(){
//     this.length = 0 ;
// }

// myArray.prototype.pushEle = function(el){
//         this[this.length] = el;
//         this.length++;
//         return this
// }

// var arr = new myArray();

// arr.pushEle(5)
// arr.pushEle(6)
// arr.pushEle(7)
// arr.pushEle(8)
// console.log(arr);

class myArray{
    constructor(){
        this.length =0
    }

}
myArray.prototype.pushEle = function(el){
    this[this.length]=el;
    this.length++;
    return this
}
myArray.prototype.firstEle = function(){
    console.log(`First Elem : ${this[0]}`);
}
myArray.prototype.print = function(){
    let str = ""
    for(let i =0;i<this.length;i++){
        str+=this[i]
    } 
    console.log(str.split("").map(Number));
}
myArray.prototype.rev = function(){
    let temp  = new myArray();
    for(let i =this.length-1;i>=0;i--){
        temp.pushEle(this[i])
    }
    return temp.print()
}

var arr = new myArray();
arr.pushEle(5)
arr.pushEle(6)
arr.pushEle(7)
arr.print()
arr.rev()
arr.print()
// arr.firstEle()
// console.log(arr.length);