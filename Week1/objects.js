const cafe = {
    name: "whitesheep",
    seatingCap: 100,
    hasOffers: true,
    drinks: [
        "coffe",
        "milk",
        "tea",
        "pepsi",
        "coke",
        "fanta"
    ]
};
console.log(cafe.seatingCap)


const person ={
    Name: "Ben",
    Age: "24",
    Ocuppation: "Student",
    songs: [
        "Purple People Eater",
        "Almost There",
        "Drunken Salior"
    ],
    hi(){
        console.log(`Hello, my name is ${this.Name}, I'm ${this.Age} years old and some of my favourite songs are ${this.songs}`)
    }
}
console.log(person.Ocuppation)
console.log(person["Name"])
console.log(person.songs)
console.log(person.hi())

let offer = "none";
let time = 1200;

const bCafe = {
    name: "Busy Bee's",
    seatingCap: 25,
    hasOffers: true,
    breakfastOffer: "Free pastrie with every large drink order",
    lunchOffer: "Free chrisp or fruit with every meal deal",
    noOffer: "no offers at this time"
}
if (time < 1100){
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
} else if (time < 1500) {
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
}



day = "monday"
let alarm = "none"
const weekendAlarm = {
    alarm: "no alarm needed"
}
const weekdayAlarm = {
    alarm: "set alarm for 7am"
}
if (day == "saturday" || "sunday") {
    alarm = "weekendAlarm";
    console.log(weekendAlarm)
} else {
    alarm = "weekdayAlarm";
    console.log(weekdayAlarm)
}

const pet ={
    name: "Ginger",
    typeOfPet: "cat",
    age: 7,
    colour: "ginger",
    eat(){
        console.log(`${this.name} is eating.`)
    },
    drink(){
        console.log(`${this.name} is drinking.`)
    },
}

console.log(pet.drink())

