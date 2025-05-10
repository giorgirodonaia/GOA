const div = document.getElementById("div1")
div.style.cssText = `
width: 100px;
height: 100px;
backgound-color: black;
opocity: 1`

div.addEventListener("click", function func(){
    let minus = 1 / 1000
    let interval = setInterval(func1({
        div.style.opocity = 1 - minus

    }, 100))
    let timeOut = setTimeout(setInterval(interval, 1000))

    div.removeEventListener("click", func())
    

})