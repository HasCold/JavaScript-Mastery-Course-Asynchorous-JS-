"use strict"
// ************************ setInterval *********************

console.log("Script Start");
    
// const id = setInterval(() => {
//         console.log(Math.random()); 
//     }, 60000);  // 1000 millisec -->> 1 second;

// console.log("Clearing Interval");
// clearInterval(id);

const body = document.body;
const button = document.querySelector("button");
console.log(body);
console.log(button);
const intervalID =  setInterval(() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb = `rgb(${red},${green},${blue})`;
   body.style.backgroundColor = rgb;  
    // console.log(rgb);
}, 1000);

setInterval(() => {
    const red = Math.floor(Math.random() * 100);
    const green = Math.floor(Math.random() * 100);
    const blue = Math.floor(Math.random() * 100);
    const rgb = `rgb(${red},${green},${blue})`;
   button.style.backgroundColor = rgb;  
    
},3000);   // 3000 millisecond -->> 3 seconds

button.addEventListener("click",()=>{
    clearInterval(intervalID);
    button.textContent = body.style.backgroundColor;
});
console.log(intervalID);
console.log(button.textContent);
console.log("Script End");
