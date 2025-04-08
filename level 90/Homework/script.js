let main = document.querySelector("main")

const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "cyan", "magenta", "lime"]

for(let i = 0; i < 10; i++){
    let div = document.createElement("div")
    let color = colors[i]
    div.style.cssText = `
    width: 50px;
    height: 50px;
    background: ${color};
    display: inline-block`

    if(i % 2 == 0){
        main.append(div)
    }else{
        main.prepend(div)
    }
    
    

}

const conteiner = document.getElementById("box")
let userMassage = prompt("enter mission: ")
function added(){
    conteiner.prepend(userMassage)
}

const box = document.getElementById("box2")
let userNum = prompt("enter number: ")

function addNum() {
    if(userNum > 20){
        box.append(userNum)
    }else{
        box.prepend(userNum)
    }
}

const box2 = document.getElementById("box3")
let userNums = prompt("enter number: ")

function oddOrEven(){
    if(userNums % 2 == 0){
        let circle  = document.createElement("div");
        circle.style.cssText = `
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: blue`
        box2.append(circle)
    }else{
        let square  = document.createElement("div");
        square.style.cssText = `
        width: 50px;
        height: 50px;
        background: red`
        box2.prepend(square)
    }

}