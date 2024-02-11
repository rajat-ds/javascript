/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  return {
    count: init,
    increment: function () {
      this.count = this.count + 1;
      return this.count;
    },
    decrement: function () {
      this.count = this.count - 1;
      return this.count;
    },
    reset: function () {
      this.count = init;
      return this.count;
    },
  };
};

//   const counter = createCounter(5)
//   counter.increment(); // 6
//   counter.reset(); // 5
//   counter.decrement(); // 4
