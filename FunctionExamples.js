/***************************************** */
/* These are all examples of functions     */
/* To run this from a terminal run 'node <file.js>' */
/* Or open it in a web browser */
/***************************************** */

/****************
* NAMED FUNCTION
****************/
//Declare the function first!
function addingNumbers(number1, number2){
    return number1 + number2;
}//This does nothing until it's invoked
//Invoke the function
var sum = addingNumbers(1,2); //sum = 3
console.log("The value of sum, from the regular function is:"+sum);

✅ Use When:
You want better stack traces in debugging.
You need to reuse the function.
You want to recursively call the function.
You want the function to be hoisted (available before its declaration).
🔍 Pros:
Easier to debug.
Clearer intent.
Can be hoisted.



/****************
*ANONYMOUS FUNCTION (unnamed function - Does the same as a named function but declared in a different way)
****************/
//Declare the function first!
const addingNumbersAnonymousFunction = function(number1, number2){
    return number1 + number2;
}//this returns the actual function to the const 'addingNumbersAnonymousFunction'
//Invoke the function by referencing the variable containing the function
console.log("calling the function stored in addingNumbersAnonymousFunction  (anonymous function): "+addingNumbersAnonymousFunction(1,2));

✅ Use When:
You’re passing a function as a callback.
You don’t need to reuse or reference the function by name.
You want to assign it to a variable or property.
🔍 Pros:
Useful for inline logic.
Keeps scope tight.
⚠️ Cons:
Harder to debug (stack traces show "anonymous").
Not hoisted.



//ARROW FUNCTIONS (Same as an anonymous function - No 'function' term and and added '=>')
//Declare the function first!
const addingNumbersArrowFunction = (number1, number2) => {
    return number1 + number2;
}//this returns the actual function to the const 'addingNumbersArrowFunction'
//Invoke the function by referencing the variable containing the function
console.log("calling the function stored in addingNumbersArrowFunction(arrow function): "+addingNumbersArrowFunction(1,2));

✅ Use When:
You want concise syntax.
You need to preserve this context (especially in React or class methods).
You’re writing short, inline functions.
🔍 Pros:
No this, arguments, or super binding — great for closures.
Cleaner syntax for callbacks and functional programming.
⚠️ Cons:
Not suitable for methods that rely on this.
Not hoisted.
Can be less readable in complex logic.



//SELF INVOKING FUNCTION (One that doesn't have to be invoked like the ones above. It's invoked ON LOAD)
//These are for anonymous or arrow functions and not named functions
//Declare the function first!
var anonFunctionSelfInvoked =  function(){
    console.log("Self invoked named function - invoked on load of page");
}
();

