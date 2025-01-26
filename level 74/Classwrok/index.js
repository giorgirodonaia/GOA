function person(name, age, height, id){
    this.name = name
    this.age = age
    this.height = height
    this.id = id
}

let obj1 = new person("giorgi", 14, 175, 12345)
let obj2 = new person("luka", 19, 164, 12345)
let obj3 = new person("gigi", 18, 160, 12345)

console.log(obj1.name)
console.log(obj2.name)
console.log(obj3.name)



function car(name, age, engine, horsePower, color, obj1){
    this.name = name
    this.age = age
    this.engine = engine
    this.horsePower = horsePower
    this.color = color
    this.user  = obj1
}

let car1 = new car("mercedes", 2014, 6.3, 600, "black", obj1)
let car2 = new car("bmw", 2018, 3.5, 300, "black", obj1)
let car3 = new car("audi", 2016, 3.3, 300, "black", obj1)
console.log(car1)
console.log(car2)
console.log(car3)