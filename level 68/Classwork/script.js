while(true){
    let a = parseFloat(prompt())
    let b = parseFloat(prompt())
    console.log(a*b)
    if(prompt("exit?: ") === "exit"){
        break
    }
}