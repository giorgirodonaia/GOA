let myForm = document.getElementById("f")
let elem = parseInt(myForm.elements.first_number.value)
let counter = 0

function myFunction() {
    let elem = parseInt(myForm.elements.first_number.value)
    counter += elem
    document.getElementById("p").textContent = counter
}

function myFunction2() {
    let elem2 = parseInt(myForm.elements.first_number.value)
    counter -= elem2
    document.getElementById("p").textContent = counter   
}

