// Promise.resolve
// Promise chaining

// then() -->> then hamesha promise return karega

function MyPromise(){
    return new Promise((resolve, reject)=>{
        resolve("foo");
    })
}

MyPromise().then(value=>{
    console.log(value);
    value += "bar";
    return value;  // yahan value return nahi horahi balke Promise return horaha ha yani ham then laga skte ha age 
    // return Promise.resolve(value);
    // Agr ma return na likho tu javascript internally kuch aisa karega 
    // Promise.resolve(undefined);
}).then((value)=>{   // callback function na value receive ki jo resolve ma ha
    console.log(value);
    value += "baaz";
    return value;
}).then(value=>{
    console.log(value);
}).catch(Error=>{
    console.log(Error);
});



