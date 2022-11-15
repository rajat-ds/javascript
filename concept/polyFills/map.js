Array.prototype.myMap = function (callbackFn) {
  const ans = [];
  const intialArray = this
  for (let i = 0; i < intialArray.length; i++) {
    ans.push(callbackFn(intialArray[i], i, intialArray));
  }
  return ans;
};

let arr = [1, 2, 3];
console.log(arr.map((value, index) => value + index));
