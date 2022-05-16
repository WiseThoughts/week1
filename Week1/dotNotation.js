console.log("Hello World"); /*used to print into the terminal*/
console.log("hello".toUpperCase()); /* .toUpperCase() to upper case the output */
console.log("HElLO WOrLD".toLowerCase());
console.log(Math.random()); /* creates a random number between 0 - 1 */
console.log(Math.random()*10); /* use *10 to make it between 0 - 10 */
console.log(Math.random()*100);
console.log(Math.floor(10.9)); /* .floor returns a interager less or equal to  */
console.log(Math.ceil(10.1)); /* Rounds the number up */
console.log(Math.round(Math.random()*100)); /* rounds the number to the nearest interager */
console.log("All Around the World".toUpperCase().charAt(7));


// console.log("    |    |    ")
// console.log("    |    |    ")
// console.log("    |    |    ")
// console.log("--------------")
// console.log("    |    |    ")
// console.log("    |    |    ")
// console.log("    |    |    ")
// console.log("--------------")
// console.log("    |    |    ")
// console.log("    |    |    ")
// console.log("    |    |    ")


const grid = [
"    |    |    ",
"    |    |    " ,
"    |    |    " ,
"--------------" ,
"    |    |    ",
"    |    |    " ,
"    |    |    " ,
"--------------" ,
"    |    |    ",
"    |    |    " ,
"    |    |    " 
]

for (let i = 0; i < grid.length; i++){
console.log(grid[i])
};

console.log("")

for (let i = 0; i<3; i++){
    for(let j = 0; j<3; j++){
    console.log("    |    |    ")
    }
    if (i !== 2){
    console.log("--------------")
    }
}

// const turn = 1;
// const playerOne = "X";
// const playerTwo = "O";
// const board = [sq1,sq2,sq3,sq4,sq4,sq5,sq6,sq7,sq8,sq9];
// const choice = parseInt(prompt("Which square would you like to pick?"));
// for(choice in board[choice]){
//     if (board[choice]!= "" && turn%2 != 0){
//         board[choice] = playerOne;
//         turn++;
//     }
//     else if(board[choice]!= "" && turn%2 === 0){
//         board[choice] = playerTwo;
//         turn++;
//     }
// }
