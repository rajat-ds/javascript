Function.prototype.myApply = function (context, args) {
  let currentContext = context || globalThis;
  let uniqueProp = Math.random();
  while (currentContext[uniqueProp] !== undefined) {
    uniqueProp = Math.random();
  }
  currentContext[uniqueProp] = this;
  let result = currentContext[uniqueProp](...args);
  delete currentContext[uniqueProp];
  return result;
};

printName.myApply(myName, ["Palia", "India"]);
