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

// function chai(){
//     let username = "shihab"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "shihab"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "shihab"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
    return num1 + num2 //if you give = {} then return should call.
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "shihab"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


















function hello() {
    console.log("Hello");
}

function bye() {
    console.log("Bye");
}

//function greeting(name1, name2, callback) {
//     if (callback === hello) {
//         callback(); // Execute the callback (hello)
//         console.log(`I am ${name1}, what about you ${name2}?`);
//     } else {
//         console.log(`Ok ${name2}, that is a great conversation`);
//         callback(); // Execute the callback (bye)
//     }
// }

//greeting("Shihab", "Fehim", hello);
//greeting("Shihab", "Fehim", bye);

//arrow function
//Does not have its own (this) context.

function hello() {
    console.log("Hello");
}

function bye() {
    console.log("Bye");
}

const greeting = (name1, name2, callback) => {
    if (callback === hello) {
        callback(); // Execute the callback (hello)
        console.log(`I am ${name1}, what about you ${name2}?`);
    } else {
        console.log(`Ok ${name2}, that is a great conversation`);
        callback(); // Execute the callback (bye)
    }
};
greeting("Shihab", "Fehim", hello);
greeting("Shihab", "Fehim", bye);


