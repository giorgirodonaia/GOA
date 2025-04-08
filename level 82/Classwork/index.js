const nums = document.getElementById("number") 
const alph = document.getElementById("alphabet")
const resNum = document.getElementById("num")
let random = Math.ceil(Math.random()*100)
const randomNum =  setInterval(function (){
    let random = Math.ceil(Math.random()*100)
    resNum.textContent = random
}, 1000)

const alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

function startNum(){
    let random = Math.ceil(Math.random()*100)
    if(nums == true){
        randomNum()
    }
}

function end(){
    clearInterval(randomNum)
}

function startAlp() {
    let random = Math.ceil(Math.random()*100)
    if(alph == true){
        randomNum()
    }
}