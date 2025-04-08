let main = document.querySelector("main")

for(let i = 0; i < 10; i++){
    let div = document.createElement("div");
    let size = 1 *Math.pow(2, i);
    div.style.cssText = `
    width: ${size}px;
    height: ${size}20px;
    background-color: black;
    `
    main.append(div)
    main.prepend(div)
}