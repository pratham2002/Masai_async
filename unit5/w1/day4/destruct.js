var obj ={  
    name: 'masai', 
    password: 'admin@123', 
    hostname:'masaischool', 
    client: 'chrome'
}

var {name,password} = obj
// console.log(`Name : ${name} & Password: ${password}`);

var obj2 ={  
    name: 'masai', 
    address: {
          pincode: 560095 
        }  
    }

// var {address} = obj2 
var {pincode:pin} = obj2.address
// console.log(`Pincode Renamed to pin and its value is ${pin}`);

const arr = [ 100, 200, 500, 600 ] 
var [a,b] = arr
// console.log(a,b);

const arr2 = [ 100, [  50, 60, 70  ]   ] 

var [c] =arr2[1]
// console.log(c);



var arrObj = [  1, {  
    arr: [ 1, 2, 3 ]
  }
] 


var [x,y] =arrObj
var [a,b,c] = y.arr

var newArr = [b,c]
console.log(newArr);