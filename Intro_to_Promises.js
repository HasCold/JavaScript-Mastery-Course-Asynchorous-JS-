// Promises -->> represent krta ha future value jo hame abhi nahi pata lkn baad ma pata chale gi
console.log("Script Start");

// Definition :-
let a = "A Promise is an object representing the eventual completion or failure of an asynchronous operation."; 
console.log(`Definiton of Promises :- ${a}`);

const bucket = ["coffee", "chips", "vegetable", "salt", "rice"];

// Promise ak callback function lega aur us function ko ham executor function kehte ha
// Produce / Create Promises
const FriedRicePromise = new Promise((resolve,reject)=>{
    if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
        // resolve() ke andr ma value provide krskta hu ke mjhe resolve hokr kya dena
        resolve("Fried Rice");
    }else{
        reject(new Error("Something missing from bucket"));  // Kuch bhi ham yahan pr pass krskte ha array object and  
    }
})
// new:-
// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.




// consume
// How to consume
// As a Javascript Developer ap Promise ko consume zayda karoge rather than produce
// .then ma ap do callback function pass krskte ho pehla agr resolve hoga tu pass hogae ga aur reject hua tu dosra pass hogae  ga
FriedRicePromise.then((MyFriedRice)=>{   //  (yahan pr wo value ayegi jo hamne uper likhi ha means Fried Rice)
    console.log("Let's eat", MyFriedRice);
}, (Error)=>{
    console.log(Error);});

setTimeout(() => {
    console.log("Hello From setTimeout");
}, 0);

for(let i = 0; i <= 50; i++){
    console.log(Math.random(), i);
}
    
console.log("Script End");
// Microtask queue ko pehle priority milegi over the callstack queue
