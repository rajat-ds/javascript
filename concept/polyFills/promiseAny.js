// promise any will wait for any one promises to be resolve else all to be rejected

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 1000);
//   });
  
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p2 success"), 2000);
//   });
  
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 success"), 5000);
//   });
  
  
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p1 fails"), 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 fails"), 2000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p3 fails"), 5000);
  });
  
  Promise.any([p1, p2, p3])
    .then((res) => {
      console.log("success", res);
    })
    .catch((err) => {
      console.error(err);
    });
  
  Promise.myAny= function (arr) {
    let result = [];
    let total = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i]
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            result[i] = { status: "rejected", value: err };
            if (++total === arr.length) reject("AggregateError: All promises were rejected")
          });
      }
    });
  };
  
  Promise.myAny([p1, p2, p3])
    .then((res) => {
      console.log("success", res);
    })
    .catch((err) => {
      console.error(err);
    });
  