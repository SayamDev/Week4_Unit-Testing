/*
const add = (add1,add2) => {
    return add1 + add2
}

let myArray = ["Dan", "Stuart", "Ben"]
*/


//challenges------------------------------------------------------------------------

//1 - what is returned is not 'null---------

const notReturned = (name) => console.log(name)

//--------------------------------------------


//2 - a value that is truthy

const truthy = (truth) => true
//console.log(truthy())



//3 value that is not falsy

const falsy = (lie) => false

//console.log(falsy())


//4 - function that creates an object with 2 properties, test to make sure that the object properties are equal to ur test function

let obj =  (cat) => {
    const obj2Properties = {
        catName: cat,
        vaccinated: false
    }

    return obj2Properties
}

console.log(obj("rio"))


module.exports = {
    //add,
    //myArray,
    notReturned,
    truthy,
    falsy,
    obj,
}

