const usersInput = prompt("Enetr number for 1000 to 10000: ")
const numsDiv = document.getElementById("nums")
const nums = 0

const idIntervel = setInterval(function (){
    numsDiv.textContent = nums += 1
}, usersInput)

function func(){
    if(usersInput.length < 4){
        alert("Error")
    }



    while((usersInput.length == 4 && usersInput[0] == nums) || (usersInput.length == 5 && nums == 10)){
        alert("Time's up")
        clearInterval(idIntervel)
    }

}


function stopFunc(){
    clearInterval(idIntervel)
}

















// const userTime = prompt("Enter time in milliseconds: ") //მომხმარებელს შემოჰყავს დრო მილიწამებში და
//                                                         //  prompt-ით პირდაპირ ინტეჯერად გაჰყავს

// const userMassage = prompt("Enetr your massage: ")      //მომხმარებელს შემოჰყავს მესიჯი
// const massageDiv = document.getElementById("massage")   //დომიდან დივს ვინახავთ ცვლადში

//  setTimeout(function (){  //სეთტაიმაუტს ვქმით
//     massageDiv.textContent = userMassage
// }, userTime)


