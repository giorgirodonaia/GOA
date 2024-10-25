function myFunction() {
    let element = document.getElementById('p1');
    console.dir(element)
}

myFunction()


function task5(id, txt) {
    document.getElementById(id).textContent = txt
}

task5('p1', "gamarjoba")