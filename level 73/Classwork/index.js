let human = {
    name: "giorgi",
    surname: "rodonaia",
    weight: "65",
    height: "173",
    age: "14"
}

console.log(human.name)

let obj = {
    row_0: [2,4,6,8,10],
    row_1: [1,3,5,7,9]
}



for(let i = 0; i < 5; i++){
    console.log(obj.row_0[i])
    console.log(obj.row_1[i])
}

let obj2 = {
    quantity: [1,2,3,4],
    element: "animals"
}

function func(obj2) {
    for(let i = 0; i < 5; i++){
    console.log(obj2.quantity[i])
    console.log(obj2.element[i])
}
}


console.log(func(obj2))