Array.prototype.myReduce  = function (cb, acc=0) {
    const array = this
    for (let i = 0; i < array.length; i++) {
      acc = cb(acc, array[i], i, array);
    }
  return acc;
}


let arr = [1,2,3]
console.log( arr.myReduce(  ( total, acc) => total+acc ,0  )   )

console.log( arr.reduce(  ( total, acc) => total+acc  ,0 )   )