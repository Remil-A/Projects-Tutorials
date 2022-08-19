// function within a function
// let a = 10
// function outer(){
//     let b = 20
//     function inner(){
//         let c = 30
//         console.log(a, b, c);
//     }
//     inner()
// }
// outer()

// return a function
// function outer(){
//     let counter = 0
//     function inner(){
//         counter ++
//         console.log(counter);
//     } 
//     inner()
// }
// outer()


// Prototypes

function person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

const person1 = new person("Bruce", "Wayne");
const person2 = new person("Clark", "Kent");

person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

console.log(person1.getFullName());
console.log(person2.getFullName());