let num1 = prompt("enter first number: ");
let num2 = prompt("enter second number: ");
function logicalOperation(num1, num2) {
    if (num1 % 1 !== 0 && num1 > num2 && num2 % 2 == 0) {
        console.log(true)
    }else {
        console.log(false)
    }
}