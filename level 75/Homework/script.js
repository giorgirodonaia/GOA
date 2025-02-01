function car(brand, model, year, engineValume){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineValume = engineValume;
    this.info = function (){
        console.log(`${this.brand} ${this.model}, ${this.year}, ${this.engineValume}`)
    }
}

let car1 = new car("Mercdes", "CLS", 2014, 6.3)
car1.info()

function book(title, author, pages, year){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.speedOfRead = function(){
        console.log(this.pages / 7)
    }
}

let book1 = new book("Harry Potter and the philosopher's stone ", "J.K.Rowling", 300, 1999)

book1.speedOfRead()

// function sportsman(name, age, sport, trainingHours){
//     this.name = name;
//     this.age = age;
//     this.sport = sport;
//     this.trainingHours = trainingHours;
//     this
// }