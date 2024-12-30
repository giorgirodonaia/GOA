let fistUser = prompt("fist user choce an element: ")
let secondUser = prompt("second user chose an element: ") 


function usersChoces(fistUsers, secondUsers) {
    if (firstUser === "rock" && secondUser === "paper" ){
        alert("Winner is a second player")
    } else if (firstUser === "paper" && secondUser === "rock"){
        alert("Winner is a first player")
    }

    if (firstUser === "rock" && secondUser === "scissors"){
        alert("Winner is a first player")
    } else if(firstUser === "scissors" && secondUser === "rock"){
        alert("Winner is a second player")
    }

    if (firstUser === "paper" && secondUser === "scissors"){
        alert("Winner is a second player")
    }else if(firstUser === "paper" && secondUser === "scissors"){
        alert("Winner is a first player")
    }
}

userChoses()