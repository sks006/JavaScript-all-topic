const promiseOne = new Promise(function(resolve, reject){
    /**
     * What promise do??
     * => Do an async task
     *    DB calls, cryptography, network
     * 
     * */
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//TODO : PASS THE VALUE BY resolve

// const promiseThree = new Promise(function (resolve, reject) {
//      setTimeout(function () {
//           resolve({
//                username: "shihab",
//                email: "sks@gmail.com",
//                number: 23434312323,
//           });
//      }, 1000);
// });
// promiseThree.then(function (user) {
//      setTimeout(() => {
//           console.log(user);
//      }, 2000);
// });
//TODO : .then().catch().finally() this is chaining abd it will help in database

// const promiseFour = new Promise(function (resolve, reject) {
//      setTimeout(function () {
//           let err = false;
//           if (!err) {
//                resolve({
//                     username: "shihab",
//                     email: "sks@gmail.com",
//                     number: 23434312323,
//                });
//           } else {
//                reject("your cookies are rejected");
//           }
//      }, 1000);
// });
// promiseFour
//      .then((user) => {
//           console.log(user);
//           return user.username;
//      })
//      .then((username) => {
//           console.log(username);
//      })
//      .catch(function (error) {
//           console.log(error);
//      });

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.