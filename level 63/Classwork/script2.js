let click = 0
let num = 2
let elem = document.getElementById("h1")
function myFunction() {
    click++
    elem.textContent = click
    while (click % 100 === 0){
        click += num
        elem.textContent = click
    }
}