// Synchronous programming vs Asynchronous programming 
// synchronous programming
// JS is synchronous programming language and single thread


// console.log("script start");
// for (let i = 0; i < 100; i++) {

//     console.log("Inside Loop");
// }
// console.log("Script End");

//                             Asynchronous programming

//********************* setTimeout ****************

// setTimeout(func, time); // -->> Takes input as a function in a first parameter and take the time into the second parameter(Means apko ye function kitni der ma run  krana hai)

console.log("Script Start");

// setTimeout function jab sara ka sara code run hoye ga tab uske baad run hoga
const id = setTimeout(()=>{
    console.log("Inside setTimeout");
}, 1000);  // 1000 millisecond -->> 1 second; setTimeout func ko ma 1 second ka delay karu

for (let i = 0; i < 100; i++) {
    console.log(".....");
}
console.log("setTimeout id is", id);
// if you don't want to run the setTimeout function after all the code execution then you have to use  clearTimeout function; yani ab wo run nahi hoga; 
console.log("Clearing Time Out !!!");
clearTimeout(id);
console.log("Script End");

