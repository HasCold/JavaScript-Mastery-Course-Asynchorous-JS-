const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");

function ChangeTxt(element, text, color, time){
    return new Promise((resolve, reject)=>{    // ye function hame promise return kraha ha

        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }
            else{
                reject("Element Not Found !!!");
            }
        
        }, time)
    })
    }

const ReturnedPromise = ChangeTxt(heading1, "One", "red", 1000);
ReturnedPromise.then(()=>{    // then bhi return karrah ha
    // mjhe promise chyie lkn kuch time ke baad chyie tu isliye ham yahan pr return sath likhe ge 
    return ChangeTxt(heading2, "Two", "purple", 1000);
}).then(()=>{
    return ChangeTxt(heading3, "Three", "blue", 2000);
}).then(()=>{
    return ChangeTxt(heading4, "Four", "green", 2000);  
}).then(()=>{
   return  ChangeTxt(heading5, "Five", "orange", 1000);  
}).then(()=>{
    return ChangeTxt(heading, "Six", "violet", 3000);  
}).then(()=>{
    return ChangeTxt(heading7, "Seven", "brown", 1000);  
}).then(()=>{
    return ChangeTxt(heading8, "Eight", "cyan", 2000);  
}).then(()=>{
    return ChangeTxt(heading9, "Nine", "indigo", 1000);  
}).catch((Error)=>alert(Error));
