function car(model, age, engine){
    this.model = model
    this.age = age
    this.engine = engine
}

let firstCar = new car("Mercedes", 2010, 4.4)
let secondCar = new car("BMW", 2006, 4.5)
let thirdCar = new car("Mercedes", 2014, 6.3)

console.log(firstCar)
console.log(secondCar)
console.log(thirdCar)


console.log("--------------------------------------------")


function animal(age, domesticOrWild){
    this.age = age
    this.domesticOrWild = domesticOrWild
}

let animal1 = new animal(2, "wild")
let animal2 = new animal(1, "domestic")
let animal3 = new animal(3, "domestic")

console.log(animal1)
console.log(animal2)
console.log(animal3)


console.log("--------------------------------------------")


function student(age, grade, gender, lastMarc){
    this.age = age
    this.grade = grade
    this.gender = gender
    this.lastmarc = lastMarc
}


let student1 = new student(10, 4, "male", 4)
let student2 = new student(14, 9, "male", 4)
let student3= new student(15, 10, "female", 5)

console.log(student1)
console.log(student2)
console.log(student3)