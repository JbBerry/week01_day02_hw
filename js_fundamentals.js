// 1.1
console.log(7+3);
// guesstimate: 10
// answer: 10

// 1.2
console.log(9 % 2);
// guesstimate: 1
// answer: 1

//1.3
console.log(typeof(42));
// guesstimate: number
// answer number

// 1.4
console.log(typeof(2) === typeof(9.24));
// guesstimate: true
// answer: true

//1.5
console.log(42 / 0);
// guesstimate: undefined ... guessed that div0 would give an error (?)
// answer: infinity

// 1.6
console.log(9 / "player1");
// guesstimate: NaN
// answer: NaN

// 1.7
console.log(NaN === NaN);
// guesstimate: true
// answer: false ... do not know why

// 1.8
console.log(typeof(NaN));
// guesstimate: NaN
// answer: number ... do not know why

// 1.9
console.log(typeof parseInt("42"));
// guesstimate: number
// answer: number

// 1.10
console.log("Brendan" + " Eich");
// guesstimate: Brendan Eich
// answer: Brendan Eich

// 1.11
var firstName = "Brendan";
var lastName = "Eich";
console.log(firstName + " " + lastName);
// guesstimate: Brendan Eich
// answer: Brendan Eich

// 1.12
var phoneNumber = "08798976";
console.log(phoneNumber.length);
// guesstimate: 8
// answer: 8

// 1.13
console.log("Brendan" === "Brendan");
// guesstimate: true
// answer: true

// 1.14 Will the following code log anything out?
var fName;
if(fName) console.log(`First name is ${fName}`);
// guesstimate: no, if fName is false
// answer:

// 1.15 Will the following code log anything out?
var name = "";
if(name) console.log(`First name is ${name}`);
// guesstimate: no, if fName is false
// answer:

// Exercise 2
// Write a program to determine what award a student should get on a test.
// If their score is 10, they get a "Distinction"
// If their score is 9, they get a "Merit"
// If their score is 8, they get a "Pass"
// If their score is less than 8 they get a "Fail"

var score = 10;
switch(score) {
  case 10:
    console.log("Congratulations! You got a Distinction");
    break;
  case 9:
    console.log("Good Job. You got a Merit");
    break;
  case 8:
    console.log("Well done. You Passed");
  default:
    console.log("You have Failed");
}


// Exercise 3
// Here's an array of objects representing different types of coffee:

var coffees = [
  { type:"Latte", price:2.65 },
  { type:"Cappuccino", price:2.75 },
  { type:"Flat white", price:2.95 },
  { type:"Super-dooper Mocha Deluxe", price:3.79 }
];
for (var i = 0; i < coffees.length; i++) {
  console.log(coffees[i].type + " cost £" + coffees[i].price + " each");
}
// Directions: Loop over the array and print out the following coffee summaries using console.log.
// Lattes cost £2.65 each
// Cappuccinos cost £2.75 each
// Flat whites cost £2.95 each
// Super-dooper Mocha Deluxes cost £3.79 each


// Exercise 4
// In the game of naughts and crosses, each cell has a value of 'x', 'o' or null. We can represent the grid as a "2 dimensional" array. That means arrays inside an array. The grid is an array with 3 arrays inside it. The first array represents the top row, the second array represents the middle row and the third array is the bottom row.
// **Directions:** Write a series of logical expressions that prints out who the winner is.
// For example if ...
var currentPlayer = 'x';
var grid = [['x','x','x'], ['o', null, 'o'], [null, null, null]];
//console.log(grid[0][0]) // prints 'x'
// ...then print "x wins" to the console. If there is no winner, print "No winner".
// Only the currentPlayer can be the winner.
// *TIP:* Break down the task. What do you need to do first?
// *TIP:* Make sure to test your code with different values for the cells and currentPlayer so that every possible winning combination is covered.
if (grid[0][0]&&grid[0][1]&&grid[0][2] === currentPlayer||// top row
    grid[1][0]&&grid[1][1]&&grid[1][2] === currentPlayer||// middle row
    grid[2][0]&&grid[2][1]&&grid[2][2] === currentPlayer||// bottom row
    grid[0][0]&&grid[1][0]&&grid[2][0] === currentPlayer||// left collumn
    grid[0][1]&&grid[1][1]&&grid[2][1] === currentPlayer||// middle collumn
    grid[0][2]&&grid[1][2]&&grid[2][2] === currentPlayer||// right collumn
    grid[0][0]&&grid[1][1]&&grid[2][2] === currentPlayer||// back slash
    grid[0][2]&&grid[1][1]&&grid[2][0] === currentPlayer){// forward slash
  console.log(currentPlayer.toUpperCase() + " is the winner");
}
// need to reformat as (grid[0][0]== currentPlayer) && (grid[0][1] == currentPlayer) && (grid[0][2] == currentPlayer)
// else is checking if the 3 locations are truthy and then the last of the 3 are == currentPlayer
