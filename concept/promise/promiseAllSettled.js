// promise allSettled will wait for all the promises to be settled( resolve or reject )

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 success"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success"), 5000);
});


// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 success"), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2 success"), 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p3 fails"), 5000);
// });

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log("success", res);
  })
  .catch((err) => {
    console.error(err);
  });

Promise.myAllSettled = function (arr) {
  let result = [];
  let total = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i]
        .then((res) => {
          result[i] = { status: "fulfilled", value: res };
          if (++total === arr.length) resolve(result);
        })
        .catch((err) => {
          result[i] = { status: "rejected", value: err };
          if (++total === arr.length) resolve(result);
        });
    }
  });
};

Promise.myAllSettled([p1, p2, p3])
  .then((res) => {
    console.log("success", res);
  })
  .catch((err) => {
    console.error(err);
  });
