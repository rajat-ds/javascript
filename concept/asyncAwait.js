// Async function always returns a promise
// Even if we return a value this function will wrap the value inside promise and it will finally return a promise
// if return value is prmoise then it will not wrap it inside prmoise
// await is kewword which can be only use inside a async function
// js engine will wait for promise to be resolve and will not execute any line after wait key word 
// we can use try and catch to handle error 
// we can also use catch like traditional promise as async function return promise


const p1 =  new Promise((resolve , reject )=>{
   setTimeout(()=>resolve("promise is resolved after 5 seconds"), 5000)
});
const p2 =  new Promise((resolve , reject )=>{
    setTimeout(()=>resolve("promise is resolved after 10 seconds"), 10000)
 });

async function call (){
   let val =  await p1
   console.log(val)
   console.log("hello")

   let val1 =  await p2
   console.log(val1)
   
}
// call()

// promise is resolved after 5 seconds
// hello
// promise is resolved after 10 seconds

const p11 =  new Promise((resolve , reject )=>{
    setTimeout(()=>resolve("promise is resolved after 10 seconds"), 10000)
 });
 const p22 =  new Promise((resolve , reject )=>{
     setTimeout(()=>resolve("promise is resolved after 5 seconds"), 5000)
  });
 
 async function call1 (){
    let val =  await p11
    console.log(val)
    console.log("hello")
 
    let val1 =  await p22
    console.log(val1)
    
 }
  call1()

//  promise is resolved after 10 seconds
//  hello
//  promise is resolved after 5 seconds