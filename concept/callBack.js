// A callback is a function that will be executed after another function gets executed.

// In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function and can be used as a property of an object.
// Functions that are used as an argument to another function are called callback functions.

function divideByHalf(sum){
    console.log(Math.floor(sum / 2));
  }
  
  function multiplyBy2(sum){
    console.log(sum * 2);
  }
  
  function operationOnSum(num1,num2,operation){
    var sum = num1 + num2;
    operation(sum);
  }
  
  operationOnSum(3, 3, divideByHalf); // Outputs 3
  
  operationOnSum(5, 5, multiplyBy2); // Outputs 20

//   In the code above, we are performing mathematical operations on the sum of two numbers.

// The operationOnSum function takes 3 arguments, first number, second number, and the operation that is to be performed on their sum (callback) .

// Both divideByHalf and multiplyBy2 functions are used as callback functions in the code above.

// These callback functions will be executed only after the function operationOnSum is executed.

// Therefore, callback is a function that will be executed after another function gets executed.