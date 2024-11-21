function func() {
    let name = document.getElementById("nm").value
    console.log(name)
    let p = document.getElementById("input")
    p.textContent = name

    let surname = document.getElementById("sm").value
    console.log(surname)
    p.textContent =p.textContent + surname

    let age = document.getElementById("age").value
    console.log(age)
    p.textContent = p.textContent + surname + surname
}