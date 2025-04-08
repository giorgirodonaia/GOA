const divs = document.getElementsByTagName("div");
for(let i = 0; i < divs.length; i++){
    divs[i].style.backgroundColor = "red";
    divs[i].style.display = "inline-block";
    divs[i].style.width = "50px";
    divs[i].style.height = "50px";
    divs[i].style.borderRadius = "50%";
}

const divsClass = document.getElementsByClassName("div");
for(let i = 0; i < divsClass.length; i++){
    divsClass[i].style.backgroundColor = "purple";
    divsClass[i].style.display = "inline-block";
    divsClass[i].style.width = "50px";
    divsClass[i].style.height = "50px";
    divsClass[i].style.borderRadius = "50%";
}