//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




console.log("2">=1)
console.log(null==0)
console.log(false==0)
console.log(null>=0)
console.log(undefined<0)
console.log(undefined>1)
console.log(undefined==0)



// stack =(premitive data), Heap=(non-premitive data)
/**
 * it is a string & premitive data, it work in stack
 */
let str1="helllo bangladesh"
let str2="bye bye banglasesh"
/**
 * it is a object & non-premitive data, it work in heap
 */
let shihab={
    Email:"shihab@gmail.com",
    Number:123456780,
    worth:"3000k"
}
str1=shihab.Email
str2=shihab.Email

console.log(str1)
console.log(str2)