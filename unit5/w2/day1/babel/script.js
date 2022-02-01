const add = (a,b)=>a+b;
let obj ={
    a:1,
    add,
    mul(a,b){
        return a*b
    },
};
console.log(add(1,2));
const {mul} = obj;
console.log(mul(5,4));