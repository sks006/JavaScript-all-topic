let a=313
if(true){
    s=a //a isa global scope so it can access from outside the block
    b=34
    return console.log(s+b)
}





// console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const username = "shihab"

    function two(){
        const website = "youtube"
        console.log(username);
    }
     //console.log(website);

     two()

}

one()

if (true) {
    const username = "shihab"
    if (username === "shihab") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}