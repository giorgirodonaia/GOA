const head = document.getElementById("head");
head.style.display = "flex";
head.style.justifyContent= "center"
head.style.color = "blue"
head.style.fontFamily = "sans-serif"

function showHTMl() {
    document.getElementById("toolToWebsite").src 
    = "https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png"

}

function showReact() {
    document.getElementById("toolToWebsite").src 
    = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
}

function showJS() {
    document.getElementById("toolToWebsite").src 
    = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-86vRuxOArrVRmMgerLZ5pi8yCs6U7zsQ&s"
}

function showCSS() {
    document.getElementById("toolToWebsite").src 
    = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAc4BswrDj_q0JcxkRYJ09NDHtv5GEfzOzQ&s"
}

const buttonHTML = document.getElementById("html")
buttonHTML.style.color = "red";
buttonHTML.style.border = "none"
buttonHTML.style.borderRadius = "5px"
buttonHTML.style.width= "100px"
buttonHTML.style.height = "50px"


const buttonCSS = document.getElementById("css")
buttonCSS.style.color = "blue";
buttonCSS.style.border = "none"
buttonCSS.style.borderRadius = "5px"
buttonCSS.style.width= "100px"
buttonCSS.style.height = "50px"


const buttonJS = document.getElementById("js")
buttonJS.style.color = "orange";
buttonJS.style.border = "none"
buttonJS.style.borderRadius = "5px"
buttonJS.style.width= "100px"
buttonJS.style.height = "50px"

const buttonReact = document.getElementById("react")
buttonReact.style.color = "lightBlue";
buttonReact.style.border = "none"
buttonReact.style.borderRadius = "5px"
buttonReact.style.width= "100px"
buttonReact.style.height = "50px"


let userMessage = prompt("Enter your massage: ")
let userNum = prompt()

console.log(userMessage.repeat(userNum))

let arr = [1,2,3,4]
let count = 0
arr.forEach(function(num) {
    count += num
}) 

console.log(count)