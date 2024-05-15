/**
 * Develop a function that multiplies two numbers without using the * operator.
 */
function multiply(a,b) {
    result=0
    if (b < 0 || a < 0) {
        a = Math.abs(a);
        b = Math.abs(b);
    }
    for(let i=0; i<a; i++){
        result+=b
    }
    console.log(result)

}
multiply(4,-3)
multiply(-4,-3)
multiply(-4,3)
multiply(4,3)