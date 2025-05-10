
const ageBtn = document.getElementById("btn1");

ageBtn.addEventListener("click", ()=>{
    const age = document.getElementById("age").value;

    if (isNaN(age) || age < 0) {
        alert("Please enter a valid age.");
        return; 
    }

    if(parseInt(age) >= 18){
        document.body.style.backgroundColor = "green";
    }else {
        document.body.style.backgroundColor = "red";
    }
})


const colorBtn = document.getElementById("btn2")

colorBtn.addEventListener("click", () => {
    const color = document.getElementById("color").value

    document.body.style.background = `${color}`
})


const themeBtn = document.getElementById("tm")

themeBtn.addEventListener("click", () => {
    document.body.style.background = "black"
})

const lightThemeBtn = document.getElementById("tm1")
lightThemeBtn.addEventListener("click", () => {
     document.body.style.background = ""
})

const countBtn = document.getElementById("count")
countBtn.addEventListener("click", () => {
    const operation = document.getElementById("op").value
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let res;

    switch (operation){
        case "+":
            res = num1 + num2
            break;
        case "-":
            res = num1 - num2
            break;
        case "*":
            res = num1 * num2
            break;
        case "/":
            res = num1 / num2
            break;
    }

    const result = document.getElementById("res")
    result.textContent = `შედეგი: ${res}`
})