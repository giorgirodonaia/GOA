let userNum = prompt("Enter your number: ")
let x = userNum % 2 == 0 ? "TWO" : userNum;
console.log(x)

let userNum1 = prompt("Enter your namber: ")
let y = userNum1 % 2 == 0 ? userNum1 * 8 : userNum1 * 9
console.log(y)

function checkNum(num) {
    let res = num > 0 ? "Possitive" : "Negative";
    return res
}

console.log(checkNum(-1))



function random(arr){
    let randomIndex = Math.floor(Math.random * arr.length)

    return arr[randomIndex]
}

console.log(random(["qwe", "ewq", "hio"]))