function bank(userName, money){
    this.userName = userName;
    this.money = money;
    this.moneyInput = function (money0){
        this.money += money0
    };
    this.moneyOut = function (money1){
        this.money -= money1
    }
    this.returnMoney = function (){
        console.log(money)
    }
}

let b = new bank("Giorgi", 1000)

b.moneyInput(500)
console.log(b.money)

function animal(height, weight, domesticOrWild){
    this.height = height;
    this.weight = weight;
    this.domesticOrWild = domesticOrWild;
    this.changeWeight = function (newWeight){
        this.weight = newWeight
    }
}

let animal1 = new animal(100, 120, "wild")

animal1.changeWeight(100)
console.log(animal1.weight)