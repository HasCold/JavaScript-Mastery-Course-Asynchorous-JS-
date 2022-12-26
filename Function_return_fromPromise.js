// Return function from Promise

function ricePromise(){
const bucket = ["coffee", "chips", "vegetable", "salt", "rice"];    
    return new Promise((resolve,reject)=>{
        if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
            // resolve() ke andr ma value provide krskta hu ke mjhe resolve hokr kya dena
            resolve("Fried Rice");
        }else{
            reject(new Error("Something missing from bucket"));  // Kuch bhi ham yahan pr pass krskte ha array object and  
        }
    })
}

ricePromise().then(
    // jab promise resolve hoga
    (MyFriedRice)=>{
        console.log("Let's eat", MyFriedRice);
    }
).catch(  // Jab promise reject hoga
    (Error)=>{
        console.log(Error);
    }
)