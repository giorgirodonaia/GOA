document.body.style.background = "black";

let box1 = document.getElementsByClassName("div1");
for(let i = 0; i<box1.length; i++){
    box1[i].style.background = "yellow";
}



let allDivElement = document.getElementsByTagName("div");
for(let i = 0; i < allDivElement.length; i++){
    allDivElement[i].style.width = "200px";
    allDivElement[i].style.height = "200px"

}

document.body.innerHTML += `<div class="div1">
                                <p>222222222</p>
                            </div>`
