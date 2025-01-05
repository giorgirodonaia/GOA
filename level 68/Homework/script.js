function func(){
    let a = new Set()
    while(true){
        let text = prompt("enter text: ");
        if(a.has(text)){
            console.log("You are ready entered this text")
            break
        }else{
            a.add(text)
        }
    }
}

func()


function askPassword() {
    let correctPassword = "12348765";
    let input;

    while (input !== correctPassword) {
        input = prompt("Enter password:");
        if (input !== correctPassword) console.log("Try again.");
    }
}

askPassword();