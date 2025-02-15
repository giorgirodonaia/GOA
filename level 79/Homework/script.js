function func1(year){
    if(((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
        return "Yes"
    } else {
        return "No"
    }
}

let userInput = prompt("Enter year: ")

console.log(func1(userInput))


function sumOfDigit(number){
    let sum = 0
    let nums = String(number)
    for(let i = 0; i < nums.length; i++){
        sum += Number(nums[i])
    }
    
    return sum
}


console.log(sumOfDigit(2025))