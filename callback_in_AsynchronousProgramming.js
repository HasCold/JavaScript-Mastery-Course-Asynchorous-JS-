// callback, callback hell, pyramid of DOM
// Asynchronous Programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");

// callback hell  (Nested callback function)  Below 

// setTimeout(()=>{     // setTimeout(AnyFunc, Time)
//     heading1.textContent = "One";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "Two";
//     heading2.style.color = "purple";
//     setTimeout(()=>{
//         heading3.textContent = "Three";
//     heading3.style.color = "red";
//     setTimeout(()=>{
//         heading4.textContent = "Four";
//     heading4.style.color = "orange";
//     setTimeout(()=>{
//         heading5.textContent = "Five";
//     heading5.style.color = "green";
//     setTimeout(()=>{
//         heading6.textContent = "Six";
//     heading6.style.color = "blue";
//     setTimeout(()=>{
//         heading7.textContent = "Seven";
//     heading7.style.color = "brown";
//     }, 2000)
//     }, 3000)
//     }, 2000)
//     }, 1000)
//     }, 2000)
//     }, 2000)
// }, 1000)  // 1000 millisecond = 1 second

// Same Above work from function

function ChangeTxt(element, text, color, time, onSuccessCallback, onFailureCallback){
setTimeout(()=>{
    if(element){
        element.textContent = text;
        element.style.color = color;
        if (onSuccessCallback) {
            onSuccessCallback();
        }
    }
    else{
        if(onFailureCallback){
            onFailureCallback();
        }
    }

}, time)
}
    // LIKE A DOM PYRAMID
ChangeTxt(heading1, "One", "violet", 3000, ()=>{
    ChangeTxt(heading2, "Two", "green", 1000, ()=>{
        ChangeTxt(heading3, "Three", "red", 2000, ()=>{
            ChangeTxt(heading4, "Four", "blue", 1000, ()=>{
                ChangeTxt(heading5, "Five", "purple", 1000, ()=>{
                    ChangeTxt(heading6, "Six", "brown", 2000, ()=>{
                        ChangeTxt(heading7, "Seven", "orange", 1000, ()=>{
                            ChangeTxt(heading8, "Eight", "cyan", 2000,)
                        }, ()=>{
                            console.log("Your element 7 does not exist");
                        })
                    }, ()=>{
                        console.log("Your element 6 does not exist");
                    })
                }, ()=>{
                    console.log("Your element 5 does not exist");
                })
            }, ()=>{
                console.log("Your element 4 does not exist");
            })
        }, ()=>{
            console.log("Your element 3 does not exist");
        })
    }, ()=>{
        console.log("Your element 2 does not exist");
    })
}, ()=>{
    console.log("Your element 1 does not exist");
})

