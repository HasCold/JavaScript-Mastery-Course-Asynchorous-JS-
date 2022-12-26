// "Deep Dive with using XHR and Promise resolve & chaining"

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, URL){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, URL);
        
        // When ready state becomes 4 it triggers -->>>
        xhr.onload = function(){
            if (xhr.status >= 200 && xhr.status <300) {
                resolve(xhr.response);
            }else{
                reject(new Error("Something Went Wrong"));
            }
        } 
        xhr.onerror = ()=>{
            reject(new Error("Something Went Wrong"));
        }
        xhr.send();
    }
    )
}
// Ma apne Promise pr agr resolve hua tu .then ya phr reject hua tu .catch laga skta hu

sendRequest("GET", URL)  // return a promise
.then(response => {  // .then bi ak promise retrun krta ha
    const data = JSON.parse(response);
    // console.log(data);
    return data;  // promise resolve hochuka ha is data value ka sath aur agr return na likhta tu data undefined ke sath resolve hojata 
}).then(data=>{
    const id = data[3].id;  // Ye data ke sath resolve hochuka tha uper tabhi ma ne iski further chaining ki;
    return id;    
}).then(id=>{
    console.log(`If we want to do further chaining of id variable then resolve the promise with return id in above promise and print the id variable is ${id}`);
    const url = `${URL}/${id}`;
    return sendRequest("GET", url);  // sendRequest bhi promise return krta ha aur tu resolve ya reject krega        
}).then(Newresponse=>{
    const newData = JSON.parse(Newresponse);
    console.log(newData);
}).catch(Error=>{
    console.log(Error);
});


