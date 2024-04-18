Function.prototype.myCall = function (context, ...args) {
  context.myFn = this;
  context.myFn(...args);
};
printName.myCall(myName, "Palia", "India");


// All we are doing here is assigning the printName() function as a property (myFn) to the myName
//  object and executing it. But it’s not a complete solution. What if the property myFn already exists 
//  inside myName? We’ll be overwriting it. So we need to make sure that the name of the property
//   we are using is unique.


Function.prototype.myCall = function(context, ...args){
    let currentContext = context || globalThis;
    let randomProp = Math.random();
    while( currentContext[randomProp] !== undefined ){
        randomProp = Math.random();
    }
    currentContext[randomProp] = this;
    let result = currentContext[randomProp](...args);
    delete currentContext[randomProp];
    return result;
}

printName.myCall(myName, "Palia", "India");