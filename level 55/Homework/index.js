let userNum1 = prompt();
let userNum2 = prompt();
console.log(parseInt(userNum1) + parseInt(userNum2));
console.log(parseInt(userNum1) * parseInt(userNum2));
console.log(parseInt(userNum1) - parseInt(userNum2));
console.log(parseInt(userNum1) / parseInt(userNum2));

function func() {
    let num1 = document.getElementById("num1");
    num1 = num1.value;
    let num2 = document.getElementById("num2");
    num2 = num2.value;

    console.log(parseInt(num1) + parseInt(num2));
    console.log(parseInt(num1) * parseInt(num2));
    console.log(parseInt(num1) - parseInt(num2));
    console.log(parseInt(num1) / parseInt(num2));
}
