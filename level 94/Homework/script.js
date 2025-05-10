const childrenCollection = document.getElementById("parent").children

// document.getElementById("modidficateBtn").addEventListener("click", function () {
//     let userNum = parseInt(prompt("Choose elements number: ") - 1)
//     let elementsColor = prompt("enter elements color: ")
    
    
//     if (userNum >= 0 && userNum < childrenCollection.length) {
//         childrenCollection[userNum].style.backgroundColor = elementsColor; 
//     } else {
//         alert("Please enter a valid number between 1 and " + childrenCollection.length);
//     }
// })

function func3() {
    childrenCollection[0].style.backgroundColor = "red"
}

function func() {
    let userNum = parseInt(prompt("Choose elements number: ") - 1)
    let elementsColor = prompt("enter elements color: ")
    
    
    if (userNum >= 0 && userNum < childrenCollection.length) {
        childrenCollection[userNum].style.backgroundColor = elementsColor; 
    } else {
        alert("Please enter a valid number between 1 and " + childrenCollection.length);
    }
}

function func1(){
    let userNum1 = parseInt(prompt("Choose elements number: ") - 1)

    
    
    if (userNum1 >= 0 && userNum1 < childrenCollection.length && childrenCollection[userNum1].hasChildNodes()) {
        alert("This element has child")
    } else if(userNum1 >= 0 && userNum1 < childrenCollection.length && !childrenCollection[userNum1].hasChildNodes()) {
        alert("Please enter a valid number between 1 and " + childrenCollection.length);
    }else {
        alert("This element has not child")
    }
}

const childrenCollection1 = document.getElementById("parent1").children

function func2(){
  
    for(let i = 0; i < childrenCollection1.length; i++){
        let elementsColor1 = prompt("enter elements color: ")        
        childrenCollection1[i].style.backgroundColor = elementsColor1
    }
}