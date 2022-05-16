
let coffeeGrinding = false;
const pressGrind = () => {
    if (coffeeGrinding) {
        console.log("Stop grinding");
        coffeeGrinding = false;
    } else {
        console.log("Begin Grinding");
        coffeeGrinding = true;
    }
}
pressGrind();


let accnum = 504
const cashWithdraw = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}.`);
}
cashWithdraw(300, 504);

const add = (num1, num2) => {
    return num1 + num2;
}
add(21,9);
console.log((add(20,80)))

const celsiusCal = (celsius) => {
    return celsius * (9/5) + 32;
}
console.log(`The temp is ${celsiusCal(20)}^F`)

let ordercount = 1
const pizzaOrder = (topping1, topping2, drink, takeout) => {
    console.log(`Order: ${ordercount}, Pizza with ${topping1} & ${topping2} and a ${drink}. To have ${takeout}.`);
    ordercount++;
}
pizzaOrder("Ham", "cheese", "pepsi", "out");

accnum = 101
let totalCash = 10
cashDraw = 1000
password = 077

let bankMachine = (cashDraw, accnum, password) => {
    if (accnum == 101 && password == 077){
        console.log("Login accepted")
        if (cashDraw <= totalCash){
            console.log("Your withdraw has been accepted.")
        } else {
            console.log("You don't have the rquired funds.")
        }
    } else {
        console.log("please enter your account number and matching password.")
    }
}
bankMachine(500, 101, 077)