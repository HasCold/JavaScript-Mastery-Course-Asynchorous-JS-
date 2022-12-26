// Consume Promises using Async Await

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL).
// then(response=>{
//     if (response.ok) {
//         return response.json();
//     }else{
//         throw new Error("Something Went Wrong");
//     }
// })
// .then(data=>{   // Actually ham promise ko consume krahe ha
//     return data;
// }).then(response=>{
//     console.log(response);
// }).catch(error=>{
//     console.log("Inside Catch Block");
//     console.log(error);
// })

// Async await

console.log("Script Start, All work will be done Asynchorously");
async function getPosts(){  // Browser ye sara kaam background ma krega
    const response =  await fetch(URL);  // Pehle ham .then laga skte the lkn ab await krne k baad ye kisi value ke sath resolve hoga; ye await is promise ke resolve hone ka wait karega;
    if (!response.ok) {
        throw new Error("Somthing Went Wrong");
    }
    // Koi cheez aisi jo promise return krti ho wo tab tak wait karegi jab tak wo resolve nahi karega 
    const data = await response.json();
    return data;  // ye promise resolve hoke return krega 
}

getPosts()
.then(MyData=>{
    console.log(MyData);
}).catch(error=>{
    console.log("Inside Catch Block");
    console.log(error);
})
console.log("Script End");
