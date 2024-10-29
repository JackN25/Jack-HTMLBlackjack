// Build a BlackJack Game

// variables representing two cards 
let firstCard = 10
let secondCard = 4 

//challenge #1
//create a new variable and set it to the sum of the two cards 
var cards = []
var sum = 0
var hasBlackjack = false
var isAlive = true
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardsEl = document.getElementById("cards-el")


//challenge #2 
// code the statements below based on the conditions shown in blackjack.png from the images folder
// your output should work in the browser's console based on changing the values assigned to the cards

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i]
        cardsEl.textContent += " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum > 21) {
        isAlive = false
    } else if (sum < 21) {
        isAlive = true
    }
    else {
        hasBlackjack = true
    }
    if (hasBlackjack) {
        messageEl.textContent = "Wohoo! You've got Blackjack! 🥳"
    } else if (isAlive) {
        messageEl.textContent = "Do you want to draw a new card? 🙂"
    } else {
        messageEl.textContent = "You're out of the game! 😭"
    }
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}

function getRandomCard() {
    let randomNumber = 1 + Math.floor(Math.random() * 13)
    console.log(randomNumber)
    if (randomNumber == 1) {
        return 11
    } else if (randomNumber > 9){
        return 10
    }
    else return randomNumber
}

function startGame() {
    isAlive = true
    cards = []
    sum = 0
    hasBlackjack = false
    newCard()
    newCard()
    renderGame()
}

//starter code
    message = "Do you want to draw a new card? 🙂"
    message = "Wohoo! You've got Blackjack! 🥳"
    message = "You're out of the game! 😭"
console.log(message)


