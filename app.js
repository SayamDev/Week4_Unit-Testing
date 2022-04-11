/*
const add = (add1,add2) => {
    return add1 + add2
}

let myArray = ["Dan", "Stuart", "Ben"]
*/


//challenges------------------------------------------------------------------------

//1 - what is returned is not 'null---------

const notReturned = (name) => console.log(name)


//refactor1

const sushi = (chu) => {
    return chu
}

//console.log(sushi())
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

//console.log(obj("rio"))




//5 - function that will return items in an array with 6 or more characters

function sports(strings){
    return strings.filter((arr) => arr.length >= 6 );
  }

  //console.log(sports(["football","tennis","cricket", "box"]))


module.exports = {

    notReturned,
    sushi,
    truthy,
    falsy,
    obj,
    sports
    
}

