const div = document.querySelector("div")

function func(div){
    if(div.hasChildNodes()){
        for(let i = 0; i<div.child.length; i++){
            console.log(div.children[i].textContent)
        }
    }else {
        console.log("There is no text!");
    }
}