// Build a BlackJack Game

// variables representing two cards 
let firstCard = 10
let secondCard = 4

//Part A and B in JS
let cardHolder = document.createElement("p")
cardHolder.id = "cards-el"
let sumHolder = document.createElement("p")
sumHolder.id = "sum-el"
document.body.appendChild(cardHolder)
document.body.appendChild(sumHolder)
let startGame = document.createElement("button")
let newCard = document.createElement("button")
startGame.id = "startGame"
newCard.id = "newCard"
document.body.appendChild(startGame)
document.body.appendChild(newCard)

document.body.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
document.body.style.backgroundImage = "images/table.png"
document.body.style.textAlign = "center"
document.body.style.color = "black"

document.button.style.backgroundColor= "goldenrod";
document.button.style.paddingtop = "8dp";
document.button.style.margin = "10px";
document.button.style.borderradius = "5px";
document.button.style.width= "150px";

//challenge #1
//create a new variable and set it to the sum of the two cards 


//chalenge #2 
// code the statements below based on the conditions shown in blackjack.png from the images folder
// your output should work in the browser's console based on changing the values assigned to the cards

//starter code
    message = "Do you want to draw a new card? 🙂"
    message = "Wohoo! You've got Blackjack! 🥳"
    message = "You're out of the game! 😭"
console.log(message)
