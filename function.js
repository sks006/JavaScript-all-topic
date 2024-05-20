/**
 * NOTE:function work in the call stack is a Last In, First Out (LIFO) data structure
 * 
 * @param {String} username 
 * @returns 
 */

function loginUserMessage(username ){
    if(!username){
        console.log("PLease enter a username");
        return  username
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("shihab"))
// console.log(loginUserMessage("shihab"))
/**
 * NOTE : when a number is concatenated with a string the number is automatically converted to a string.
 * parseInt() function use to convart string to int
 * if i pass string in parseInt() then it will returen nan
 */

console.log(loginUserMessage("shihab"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "shihab",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));