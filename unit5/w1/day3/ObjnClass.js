class Circle{
    constructor(radius){
        this.radius = radius;
    }

    getCircumference(){
        console.log(`The circumference of the circle is ${2*3.1415*this.radius}`)
    }
}

const c1 = new Circle(4)
c1.getCircumference()

class Claculator{
    constructor(a,b){
        this.a =a;
        this.b =b;
    }
    add(){
        return this.a+this.b
    }
    sub(){
        return this.a-this.b
    }
    div(){
        return this.a/this.b
    }
    multi(){
        return this.a*this.b
    }
}

let cal1 = new Claculator(10,4);
console.log("Mutltiplication",cal1.multi())
console.log("Division",cal1.div())
console.log("Addition",cal1.add())
console.log("Subtract",cal1.sub())