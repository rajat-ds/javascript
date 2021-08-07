// 𝗛𝗼𝘄 𝘁𝗼 𝘂𝘀𝗲 𝗢𝗯𝗷𝗲𝗰𝘁.𝗳𝗿𝗲𝗲𝘇𝗲 𝗮𝗻𝗱 𝗢𝗯𝗷𝗲𝗰𝘁.𝘀𝗲𝗮𝗹 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁💃🔥
// The Freeze and Seal methods are used to prevent JavaScript objects from being changed. 
//These can be useful if you want an object's state or properties to remain the same even after it is sent over a network,
// which would ordinarily cause changes in its own state.👇📍

// 💡👉 Objects have some limitations that make them more difficult than other data structures when trying to store information for long
// periods of time as they may change their states by themselves without any interference on our part.🔥

// ✍️ 𝗢𝗯𝗷𝗲𝗰𝘁 𝗳𝗿𝗲𝗲𝘇𝗲()
// JavaScript's Object.freeze() is used to permanently block changes in an object by making it impossible for users to add, update or remove 
//any attributes from the set of objects passed as arguments. This prevents data modification and ensures that your code will not cause errors 
//when someone tries modifying the frozen object.🚀

// ✍️ 𝗢𝗯𝗷𝗲𝗰𝘁 𝘀𝗲𝗮𝗹()
// The Object.seal() function blocks adding new properties into an object while still enabling us to change and update existing ones.
// This prevents the unintentional modification of a defined structure but allows for more flexibility when needed.🚀

const rockStar = {
    name:'Rajat Kashyap',
    age:22
}

Object.freeze(rockStar)
rockStar.name = "SM"
rockStar.address = "Prayagraj"
console.log(rockStar)  // {name: "Rajat Kashyap", age: 22}

const fakeRockStar = {
    name:"Sohan",
    age:27
}
Object.seal(fakeRockStar)
fakeRockStar.name= "mohan"
fakeRockStar.age= 99
fakeRockStar.address = "America"

console.log(fakeRockStar)  // {name: "mohan", age: 99}
