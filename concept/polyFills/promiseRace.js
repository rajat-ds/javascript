// Promise Race will wait any one to be settled


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 success"), 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 fail"), 2000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p3 fails"), 5000);
  });
  
  
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p1 fails"), 1000);
//   });
  
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p2 sucees"), 2000);
//   });
  
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 success"), 5000);
//   });
  
  Promise.race([p1, p2, p3])
    .then((res) => {
      console.log("success", res);
    })
    .catch((err) => {
      console.error(err);
    });
  

  