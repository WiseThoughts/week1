

let drinkOrder = [
    "Alex - Fanta",
    "Ben - Aplle Juice",
    "James - Coke",
    "Richard - Pepsi Max"
];
console.log(drinkOrder);
console.log(drinkOrder[3]);
drinkOrder[2] = "Tylor - Orange Juice";
console.log(drinkOrder);
console.log(drinkOrder.length); /* how many items are in the list not the number of characters */
drinkOrder.push("SpiffingBrit - Yorkshire Tea"); /* adds it to the end of the list */
drinkOrder.push("Jessica - Coffee");
console.log(drinkOrder);
drinkOrder.pop(); /* removes the last item on the list */
console.log(drinkOrder)

let songs = [
    "Purple People Eater",
    "Almost There",
    "Drunken Salior"
];
console.log(songs);

songs.push("Burn Butcher Burn", "I Want It That Way");
console.log(songs);
songs.pop();
console.log(songs);

const fruits = [
    "Banana", 
    "Orange", 
    "Apple", 
    "Mango"
];
fruits.shift(); // removes the first item of the list //
console.log(fruits)