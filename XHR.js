// Hame object bana na ha XMLHttpRequest ko use krke

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();   // We can call every methods after create an object by calling the XHR constructors
// console.log(xhr);

// We use the REST (REpresentational State Transfer) API; website:- json typicode   

// STEP 1:-  On this object there is an open method which  we have used

console.log(`XHR.readystate before open() not called yet is`, xhr.readyState);
xhr.open("GET", URL)  // ("Method", where we request from); This work will done Asynchorously means this work will done by Browser; 
console.log(`XHR.readystate after open() called yet is`, xhr.readyState);
// xhr.onreadystatechange = function(){  // Browser is function ko us time call karegea jab uski ready state change hogi;
    // console.log(xhr.readyState); // -->> 4 readystate shown ;
    //  It MEans when our readytsate is not gonna be 4 we didn't get response from xhr  
    // if (xhr.readyState === 4) {
    //     console.log(xhr.readyState);  // -->> typeof is string
    //     const response = xhr.response;
    //     // we have to convert this response data into javascript object and parse ; JSON -->> JS library 
    //     // Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
    //     const Data =  JSON.parse(response);
    //     console.log(Data);
    //     console.log(`After Parsing string data convert into JavaScript`, typeof Data);
    // }
// }

// The load event is fired when an XMLHttpRequest transaction completes successfully.

xhr.onload = function(){   // This method will only run if my readystate becomes 4
    console.log(xhr.readyState);
    const response = xhr.response;
    const Data =  JSON.parse(response);
        console.log(Data);
        console.log(`After Parsing string data convert into JavaScript`, typeof Data);
}

xhr.send();  // This request has to send

// HTTP Request Codes

// 1xx informational response – the request was received, continuing process
// 2xx successful – the request was successfully received, understood, and accepted
// 3xx redirection – further action needs to be taken in order to complete the request
// 4xx client error – the request contains bad syntax or cannot be fulfilled
// 5xx server error – the server failed to fulfil an apparently valid request