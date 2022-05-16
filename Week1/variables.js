

let a=10 /* let= can be changed */
const b=5 /*can't be changed */
var c=15 /* just a variable - don't use nowaday's just change it to let */
console.log(a+b+c);

// + pluse
// - minus
// * times
// ** power of 
// / divide
// % reminder of 
// ++ increase by 1
// -- minus by 1

let favDrink = "Fanta"
console.log(favDrink);

let drink2 = "Pepsi Max"
console.log("My favourite drink is " + favDrink);
console.log(`My favourite drink is ${favDrink}, another drink I like is ${drink2}.`); /* Use back ticks underneath esc " ` " for ${} */

let name = "Ben";
let age = "24";
let favColour = "Orange";
console.log(`Your name is ${name}, you are ${age} years old and your favourite colour is ${favColour}.`)


let breakfast = "Toast"
let lunch = "Pasta"
let dinner = "Chicken Curry"
console.log(`For breakfast I had ${breakfast}, for lunch I had ${lunch} & for tea I had ${dinner}.`)
breakfast = "Cearel"
lunch = "a Ham Sandwich"
dinner = "Pork Cassarole"
console.log(`For breakfast I had ${breakfast}, for lunch I had ${lunch} & for tea I had ${dinner}.`)


let space1 = "X"
let space2 = "O"
let space3 = " "
console.log(`     |     |      `)
console.log(`  ${space1}  |  ${space2}  |  ${space3}   `)
console.log(`     |     |      `)
console.log(`-----------------`)
console.log(`     |     |      `)
console.log(` ${space1}   |  ${space1}  |  ${space3}   `)
console.log(`     |     |      `)
console.log(`-----------------`)
console.log(`     |     |      `)
console.log(` ${space2}   |  ${space3}  |  ${space3}   `)
console.log(`     |     |      `)


let deltaDate = Date.now() - Date.parse("24 Sep 1997 00:00:00 GMT");
let deltaDays = deltaDate / (1000*60*60*24);
let years = deltaDays/365;
console.log(`I am ${years} years old.`);

let deltaBDate = Date.parse("24 Sep 2022 00:00:00 GMT") - Date.now();
let deltaBDay = deltaBDate / (1000*60*60*24);
console.log(`It is ${deltaBDay} days till my birthday.`)

