const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

/**
 * note:
 * NEW => make a contractor or copy of User 
 * new key use=>step1: first make a empty object/new object={}
 *              step2: contractor function call because of new keyword=every thing        *                     Encapsulation  
 *              step3: inject every thing in (this) keyword & what you encapsulate *                     previously
 *              step4: pass in the function
 */

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);