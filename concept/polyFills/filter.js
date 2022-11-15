Array.prototype.myFilter = function (callbackFn) {
  const results = [];
  const array = this
  for (let i = 0; i < array.length; i++) {
    const cbResult = callbackFn(array[i], i, array);
    if (cbResult) results.push(array[i]);
  }
  return results;
};
