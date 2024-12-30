const myForm = document.getElementById("f1");

function checkElements() {
    console.log(myForm.elements.name.value);
    console.log(myForm.elements.surname.value);
    console.log(myForm.elements.em.value);
    console.log(myForm.elements.pass.value);
    console.log(myForm.elements.check.checked);
}