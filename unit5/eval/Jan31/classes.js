class Rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth
    }

    area(){
        console.log(`Area is = ${this.length*this.breadth} units`)
    }
}

class Sqaure extends Rectangle{
        constructor(side){
            super(side,side)
            this.side =side;
        }
    
    getPerimeter(){
        console.log(`Perimeter is = ${this.side*4} units`)
    }
        
} 


let r1 = new Rectangle(4,5);
let sq1 = new Sqaure(10);
r1.area()
sq1.area()
sq1.getPerimeter()