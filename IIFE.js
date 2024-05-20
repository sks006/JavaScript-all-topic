// Immediately Invoked Function Expressions (IIFE)
//we use IIFE for skip the global variable polution and exicuit the function immediately .


/*
this is name IIFE syntex
*/(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();// if i don't give (;) in the end then [theTypeError: (intermediate value)(...) is not a function ] Occares

/*
this is parameterized IIFE syntex
*/
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Shihab')
