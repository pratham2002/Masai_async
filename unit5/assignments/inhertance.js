
const grandParent = {
    firstName: "grandpa",
    middleName: "middle",
    lastName: "lastname",
    print : function() {console.log(this.firstName , this.middleName, this.lastName)}
}

const parent = Object.create(grandParent)
parent.middleName = parent.firstName;
parent.firstName = "parent";
 
const child = Object.create(parent)
child.middleName = child.firstName;
child.firstName = "child"


grandParent.print()
parent.print()
child.print()

