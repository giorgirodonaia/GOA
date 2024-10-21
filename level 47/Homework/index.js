function element() {
    let element = prompt();
    console.log("Elements: " + element);
}

element()


function getSeconds() {
    let minutes = prompt();
    if (minutes <= 0) {
        return false
    } else {
        console.log(minutes * 60)
    }
}

getSeconds()

function myFunction() {
    let x = prompt();
    let y = prompt();
    let z = prompt();
    let newX = parseInt(x);
    let newY = parseInt(y);
    let newZ = parseInt(z)
    let sum = newX + newY;
    console.log(sum * newZ)
}

myFunction()


function myFunction2() {
    let num1 = parseInt(prompt());
    let num2 = parseInt(prompt());
    console.log(num1 > num2 || num1 < num2)
}

myFunction2()

function myFunction3() {
    let p1 = document.getElementById('p1');
    let prompt1 = prompt();
    p1.textContent = prompt1
}

myFunction3()