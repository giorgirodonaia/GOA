const friend1 = {
    name: "Saba",
    lastname: "Kvekveskiri",
    age: 14,
    height: 175,
    wieght: 61
}

const friend2 = {
    name: "Gigi",
    lastname: "Dzandzava",
    age: 13,
    height: 169,
    wieght: 63
}

const frined3 = {
    name: "Temo",
    lastname: "Jejeia",
    age: 15,
    height: 167,
    wieght: 60
}

friend1.weight = 60;
friend2.height = 170;
frined3.age = 14;


console.log(friend1);
console.log(friend2);
console.log(frined3);

console.log(friend1.wieght);
console.log(friend2.height);
console.log(frined3.age);



console.dir(document);
document.body.children[0].textContent = "Giorgi";
document.body.children[0].style.color = "blue"

// DOM - დკუმენტის ობიეტის მოდელი
// ჯავასკრიპტის ძრავა არის ბრაუზერში ჯავასკრიპტის კoდის  მკითხველი.   
// javascript-ის ძრავები: Chrome-ში არის V8, Firefox-ში არის Mozilla Firefox, Microsoft-ში არის Chakra.