// const button = document.getElementById("addedBtn")
// const body = document.body
// button.addEventListener("click", function (){
//     let div = document.createElement("div")
//     div.style.cssText = `
//     width: 100px;
//     height: 100px;
//     background: red;`
//     body.prepend(div)
// })

// const square = document.getElementById("sq")
// square.style.cssText = `
// width: 100px;
// height: 100px;
// background-color: blue`

// square.addEventListener("click", () => {
//     square.style.borderRadius = "50%"

//     setTimeout(() => {
//         square.style.borderRadius = "0%"
//     }, 1000)
// })


const moveButton = document.getElementById("animation")
const elem = document.getElementById("elem")
elem.style.cssText = `
width: 100px;
height: 100px;
background: green;
`




moveButton.addEventListener("click", () => {
    console.log("hello")
    let userTime = parseInt(prompt("Enter time of animation: "))
    elem.style.transition = `all ${userTime / 4}s`
    elem.style.position = "relative"
    let position = 50
    
    elem.style.right = position + "px"

    setTimeout(() => {
        console.log("hi1")
        elem.style.bottom = position + "px"
    }, userTime / 4 )

    setTimeout(() =>{
        console.log("hi2")
        elem.style.bottom = "0px"
    }, userTime / 2)

    setTimeout(() => {
        console.log("hi3")
        elem.style.right = "0px"
    }, userTime * 0.75)
    
    // let id = setInterval(() =>{
    //     if(200 >= position){
    //        clearInterval(id) 
    //     }else{
    //         position += 10
    //         elem.style.left = position + "px"
    //         elem.style.right = position + "px"
    //         elem.style.top = position + "px"
    //         elem.style.bottom = position + "px"
    //     }
            

    // }, userTime)
})



// document.getElementById("typing").addEventListener("click", () => {
//     let userMassage = prompt("Eneter your massage: ");
//     let userTypingDiv = document.getElementById("typingDiv")
//     userTypingDiv.textContent = ""
//     let index = 0
//     let typingAnimation = setInterval(() => {
//         if(index <= userMassage.length) {
//             userTypingDiv.textContent = userMassage.substring(0, index);
//             index++;
//         }else{
//             clearInterval(typingAnimation)
//         }
//     }, 200)
// })