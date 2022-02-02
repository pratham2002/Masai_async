const teacher = {
    first:"Aditya",
    last: "Agrawal",
    fullName: function(specail){
         return this.first+ " "+ this.last +" "+specail
    },
}

const person={
    first: "Pratham",
    last:"Agrawal"
}


const p1 =teacher.fullName.call(person,"Maths")
const p2 =teacher.fullName.apply(person,["Maths"])
const p3 =teacher.fullName.bind(person,"Maths")
console.log(p1);
console.log(p2);
console.log(p3());