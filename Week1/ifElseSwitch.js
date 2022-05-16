
let weather = "snowy"
if (weather == "sunny"){
    console.log("Surprising weather we are having.")
} else if (weather == "rainy") {
    console.log("Typical british weather we are having.")
} else {
    console.log("Well, what's going on here then?")
}


// == equal regardless of type
// === strict equal to, checks values and type are equal 
// != not equal
// !==strict not equal, checks values and type are equal 


if (1 !== 1) {
    console.log(true)
} else {
    console.log(false)
}

let place = "Manc";
let weather2 = "sunny";

if (place == "Manc" && weather2 == "sunny") {
    console.log("Check again")
} else if (place == "Manc" && weather2 =="rainy") {
    console.log("Well of course!")
}
else {
    console.log("what is isn't raining?")
}

//   && (and) both statements have to be true for the code to run
//   || (or) either condition can be met for the code to run

let day = "sunday";
if (day == "saturday" || day == "sunday"){
    console.log("It's the weekend.");
}
else {
    console.log("when is it the Weekend?")
}


let drink = "fanta";

switch(drink){
    case "coke":
    case "pepsi":
        console.log("No taste");
        break;
    case "fanta":
    case "orangina":
        console.log("Good choice");
        break;
    case "tango":
    case "apple juice":
        console.log("good choice but not the best");
        break;
    defaulf:
        console.log("What else is there to like?");
}

const grade = 87;

switch (grade) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}

age = "17"
let country = "UK"
if (age == "17" && country == "UK") {
    console.log("I can serve you now.")
}
else {
    console.log("I can't serve you")
}

let pizzaTopping = "ham"
switch(pizzaTopping){
    case "ham":
    case "Cheese":
    case "chicken":
        console.log("Add it to the pizza");
        break;
    case "pepperioni":
    case "olives":
    case "pinapple":
        console.log("don't add that to my pizza");
        break;
}


let pass = "01613304343434"
let n = pass.length
if (n >= 7){
    console.log("Your password is long enough")
}
else {
    console.log("please make a longer password")
}

let num = 21
if (num % 3 == 0 || num % 5 == 0){
    console.log("This number is divisable by 3 or 5")
}
else {
    console.log("This number isn't cleanly divisable by 3 or 5")
}

num = 7
if (num % 3 == 0 && num % 5 == 0){
    console.log("fizz buzz")
} else if (num % 5 == 0){
    console.log("buzz")
} else if (num % 3 == 0){
    console.log("fizz")
}
else{
    console.log(`${num}`)
}

const time = "6";
switch (time) {
    case time < "7":
        console.log("I'm at home");
        break;
    case time > "8":
        console.log("I'm on my way to work");
        break;
    case time > "9":
        console.log("I'm at work");
        break;
    case time > "12":
        console.log("I'm on a break");
        break;
    case time > "13":
        console.log("I'm back at work");
        break;
    case time > "19":
        console.log("I'm back at home");
        break;
    case time > "24":
        console.log("What TIME zone are you in?")
        break;
    default:
        console.log("Where am I?");
}



let num1 = 10
let num2 = 10
let num3 = num1 + num2
let num4 = num1 * num2
if (num3 % 2 == 0){
    console.log("The sum is even")
} else {
    console.log(`${num4}`)
}

let word = "bob";
let wordLast = word.charAt(0);
let wordFirst = word.slice(-1);
if (wordFirst === wordLast) {
        console.log("True")
}
else {
    console.log("Flase")
}

num = "10011001";
num = Array.from(num);
let numHalfway = (num.length) / 2;
let numEnd = num.length;
let numSecondHalf = num.slice(numHalfway,numEnd);
let numFirstHalf = num.slice(0,numHalfway);
numFirstHalf = numFirstHalf.toString();
numSecondHalf = numSecondHalf.toString();
if(numFirstHalf == numSecondHalf){
    console.log("Palindrome!");
}
else {
    console.log("Not a palindrome!");
}


let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let highestIndex = 0;
for (let i = 0; i < vowelArr.length; i++){
    index = string.lastIndexOf(vowelArr[i]);
if (index >= highestIndex ){
    highestIndex = index;
    lastVowel = vowelArr[i];
}
}
console.log(lastVowel); 
console.log(highestIndex)
