// ***************** Fetch *************

const URL = "https://jsonplaceholder.typicode.com/posts";

// GET -->> It means to read Data
// POST -->> To create Data on server

// In-built function fetch()
const What =  fetch(URL); // built in GET method
console.log(What); // -->> here it means fetch returns the promise so we can add .then() method

// NOTE :- Fetch promises only reject with a TypeError when a network error occurs. Since 4xx and 5xx responses aren't network errors, there's nothing to catch. You'll need to throw an error yourself to use Promise#catch.
fetch(URL,{
    method: 'POST',
    body: JSON.stringify({  // JSON.stringify convert  karega object ko json ma; hum JSON ma hi data create krahe ha  
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
}).then(response=>{
    // console.log(response.json());  // response pr ham ak method use krkste ha json();
    //  response.json() bhi ak promise return karega  
    if (response.ok) {
        return response.json() // after promise resolve by return then it can be used for chaining;
    }else{
        throw new Error("Something Went Wrong");
    }
}).then(data=>{
    console.log(data);
}).catch(error => { // Runs when the network error happens
    console.log("Inside Catch Block");
    console.log(error);
})

