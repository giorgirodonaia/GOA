let userAge = prompt("Eneter your age: ")
let userAge1 = userAge >= 18 ? "18" : "not 18"
console.log(userAge1)

function func(num1, num2){
    return num1 > num2 ? `${num1} more`: num1 < num2 ? `${num2} more` : "Equal"
}

console.log(func(1,1))