// An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

(function(){ 
    // Do something;
  })();

//   To understand IIFE, we need to understand the two sets of parentheses which are added while creating an IIFE :

// First set of parenthesis:

(function (){
   //Do something;
})

// While executing javascript code, whenever the compiler sees the word “function”, it assumes that we are declaring a function in the code. Therefore, if we do not use the first set of parentheses, the compiler throws an error because it thinks we are declaring a function, and by the syntax of declaring a function, a function should always have a name.

function() {
  //Do something;
}
// Compiler gives an error since the syntax of declaring a function is wrong in the code above.

// To remove this error, we add the first set of parenthesis that tells the compiler that the function is not a function declaration, instead, it’s a function expression.

// Second set of parenthesis:

(function (){
  //Do something;
})();

// From the definition of an IIFE, we know that our code should run as soon as it is defined. A function runs only when it is invoked. If we do not invoke the function, the function declaration is returned:

(function (){
  // Do something;
})

// Returns the function declaration

// Therefore to invoke the function, we use the second set of parenthesis. .