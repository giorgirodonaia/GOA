let whatAWeather = prompt("what a weather good or bad?: ");
let time = prompt("wath time now: ");
let usersAnswer = prompt("you ready for a wolking?: ");
function goToWolking(whatAWeather, time, usersAnswer) {
    if((whatAWeather === "good" || time != "night") && usersAnswer === "yes"){
        alert("You can to go walking in outdoor")
    } else{
        alert("You can not to go walking in outdoor")
    }
}

let border = prompt("You can see forward border?: ");
let space = prompt("You u have space?: ");
let signal = prompt("You hear a signal?: ");
function moveForward(border, space, signal) {
    if (border != "yes" && space === "yes" || signal === "yes"){
        alert("You can move forward")
    } else {
        alert("You can not move forward")
    }
}

let takeThing = prompt("You can take this thing?: ");
let mayOrNo = prompt("May you take this things?: ");
let otherPerson = prompt("Other person want this thing?: ");
function takeTings(takeThing, mayOrNo, otherPerson) {
    if (takeThing === "yes" && mayOrNo === "yes" || otherPerson === "no") {
        alert("You can take this thing")
    } else {
        alert("You can not take this thing")
    } 
}

let actualyInfo = prompt("This information is actualy?: ");
let useful = prompt("This information is useful?: ");
let timeForWor = prompt("You have time for work this information?: ");
function information(actualyInfo, useful, timeForWor) {
    if (actualyInfo === "yes" && useful === "use" || timeForWor === "yes") {
        alert("You can remember this information")
    } else {
        alert("You can not remember this information")
    }
}

let whatTime = prompt("late time now?: ");
let tired = prompt("Are you tired?: ")
let wakeUp = prompt("Do you need to wake up early?: ");
let light = prompt("light is turn off?: ");
function sleepOrNo(whatTime, tired, wakeUp, light) {
    if ((whatTime === "yes" && tired === "yes" || wakeUp === "yes") && light === "yes") {
        alert("You can sleep")
    } else {
        alert("You can not sleep")
    }
}


let friends = prompt("Are youre friends agree to go to party?: ");
let tommorowDay = prompt("Is tommorow a work day?: ");
let party = prompt("Is a party near?: ");
function goToParty(friends, tommorowDay, party) {
    if (friends === "yes" && tommorowDay != "yes" || party === "yes") {
        alert("You can go to party")
    }else {
        alert("You can not go to party")
    }
}

let whatWeather = prompt("What weather is like outdoor?: ");
let plan = prompt("Do you have plans outdoor?: ");
function stayHome(whatWeather, plan) {
    if ((whatWeather === "rainy" || whatWeather === "snowy") && plan != "yes") {
        alert("You must stay at home")
    }else {
        alert("You must not stay at home")
    }
}

let whatWeather2 = prompt("Is the weather dry?: ");
let sportShoes = prompt("Do you have sport shoes?: ");
let friend2 = prompt("Are your friends ready to go running?: ");
function goToRun(whatWeather2, sportShoes, friend2) {
    if (whatWeather2 === "yes" && sportShoes === "yes" || friend2 === "yes") {
        alert("You can go to run")
    }else {
        alert("You can not go to run")
    }
}

let whatDay = prompt("What day today?: ");
let work = prompt("Do you have other work?: ");
let favoriteClubPlay = prompt("Our favorite club playing today?: ");
function watchMatch(whatDay, work, favoriteClubPlay) {
    if (whatDay === "Saturday" || whatDay === "Sunday" || work != "yes" || favoriteClubPlay === "yes") {
        alert("You can watch a football match")
    }else {
        alert("You can not watch a football match")
    }
}