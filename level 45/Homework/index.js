function userInput() {
    let num1 = prompt("enter a number: ")
    let num2 = prompt("enter a number: ")
    let intNum1 = parseInt(num1)
    let intNum2 = parseInt(num2)
    console.log(intNum1 + 3, intNum1 * 3, intNum1 - 3, intNum2 + 3, intNum2 * 3, intNum2 - 3);
}

userInput()

function userInput2() {
    let input = prompt()
    console.log(input[0])
}

userInput2()

function userInput3() {
    let input3 = prompt()
    let intInput3 = parseInt(input3)
    console.log(intInput3 * intInput3)
}

userInput3

function changeColor() {
    let p = document.getElementById("p")
    p.style.color = "blue"
}

function changeText() {
    let text = prompt()
    let p1 = document.getElementById("p1")
    p1.textContent = text
}