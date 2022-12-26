// understand callback 

// function myfunc(callback){
// console.log("Function is doing task 1");
// callback();
// }

// function myfunc2(){
//     console.log("Function is doing task 2");
// }

// // myfunc(myfunc2);  // callback function

// myfunc(()=>{
//     console.log("Function is doing task 2");
// });

function GettwoNumbersAndAdd(number1, number2, onSuccess, onFailure){
    console.log(number1,number2);
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);        
    }
    else{
        onFailure();
    }
}

// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }

GettwoNumbersAndAdd(5, 5, (num1, num2)=>{
    console.log(num1 + num2);
}, ()=>{
    console.log("Wrong Data Type");
    console.log("Please Pass Numbers Only");    
});  // "6" -->> data type is string
