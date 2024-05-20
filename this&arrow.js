
// ==================== This ===============
// let user={
//     userName:"shihab",
//     Email:"shihab@gmail.com",
//     Number:123456789,
//     welcomeMassage:function () {
//         return console.log(`${this.userName} ,welcome to this site`)
//     }
// }

// user.userName="onto"
// user.welcomeMassage()


// let user2={
//     userName:"fehim",
//     Email:"fehim@gmail.com",
//     Number:123456789,
//     welcomeMassage:function () {
//         return console.log(`${userName} ,welcome to this site`)// ReferenceError: userName is not defined
//     }
// }




const user = {
    username: "shihab",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

 function chai(){
     let username = "shihab" 
    console.log(this.username); // Output is undefined
}

chai()

// const chai = function () {
//     let username = "shihab"
//     console.log(this.username);
// }
// ======================== arrow ===============

const chai =  () => {
    let username = "shihab"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
     return num1 + num2
 //}

 //const addTwo = (num1, num2) =>  num1 + num2 
 /*Implicit Return: This occurs when a function returns a value without the return keyword*/

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "shihab"})// In this line  return OBJ from a function that's why Implicit return need


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()