
let favDrinks = [
    "Fanta",
    "Aplle Juice",
    "Coke",
    "Pepsi Max"
];

for (let i = 0; i < favDrinks.length; i++){
    console.log(favDrinks[i]);
};



let mulitplesTwo = [];
for (let i = 0; i < 21; i++){
    if (i % 2 == 0){
        mulitplesTwo.push(i);
    }
}
console.log(`Numbers divisible by 2 between 0 and 21 are: ${mulitplesTwo}`);



let age = 15;
while(age < 18){
    console.log("You're underage.");
    age++;
}
console.log("You're now old enough.")



let cards = [
    "Diamond",
    "Spade",
    "Heart",
    "club"
];
let currentCard = "club";
while(currentCard != "Spade"){
    console.log(currentCard)
    currentCard = cards [Math.floor(Math.random()*4)];
}
console.log(currentCard)







let movies = [
    "Marvel",
    "Troy",
    "Star Wars",
    "Harry Potter",
    "Gone Girl"
];
movies.push("Avatar", "Saving Private Ryan")
for (let i = 0; i < movies.length; i++){
    console.log(movies[i]);
};



let numList = [];
for(let i = 9; i >= 0; i--){
    numList.push(i);
    }
console.log(numList); 


let bobsFollowers = [
    "Alpha",
    "Ben",
    "Chris",
    "Danny"
];
let hannahsFollowers = [
    "Danny",
    "Ben",
    "Frank",
    "George"
];
for(let i = 0; i < bobsFollowers.length; i++){
    for(let j = 0; j < hannahsFollowers.length; j++){
        if(bobsFollowers[i] == hannahsFollowers[j]){
            console.log(`${bobsFollowers[i]} Match`);
            break;
        }
    }
}


movies = [
    "Marvel",
    "Troy",
    "Star Wars",
    "Harry Potter",
    "Gone Girl"
];
for (let i = 0; i < movies.length; i++){
    console.log(movies[i]);
};
if (movies[2] != "Ghostbusters"){
    console.log("Boo! We want Ghostbusters!");
} else {
    console.log("Yay, It's Ghostbusters.");
}



ranNum = [];
while(ranNum.length < 6){
    let r = Math.floor(Math.random() * 50) + 1;
    if(ranNum.indexOf(r) === -1) ranNum.push(r);
}
console.log(`${ranNum}`);


randNumber = [];
for (i = 0; i < 7; i++){
    x = Math.round(Math.random()*30)
    if (x % 7 == 0){
        randNumber.push(x);
    }
}
console.log(`${randNumber} are divisable by 7`)




// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false.
// The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

// while — loops through a block of code as long as the condition specified evaluates to true.
// do…while — loops through a block of code once; then the condition is evaluated. 
//            If the condition is true, the statement is repeated as long as the specified condition is true.
// for — loops through a block of code until the counter reaches a specified number.

let result = '';
let g = 0;
do {
g = g + 1;
result = result + g;
} while (g < 5);
console.log(result);

