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
var gameStart = false

document.getElementById("dealerTurn").disabled = true;
document.getElementById("newCard").disabled = true;

var skippedTurns = false

var botCardsEl = document.getElementById("botcards-el")
var botSumEl = document.getElementById("botsum-el")
var bot_cards = []
var bot_sum = 0
var bot_win = false

//challenge #2 
// code the statements below based on the conditions shown in blackjack.png from the images folder
// your output should work in the browser's console based on changing the values assigned to the cards

function passTurn() {
    skippedTurns = true
    while (bot_sum < 21) {
        let randomNumber = getRandomCard()
        bot_sum += randomNumber
        bot_cards.push(randomNumber)
    }
    for (let i = 0; i < bot_cards.length; i++) {
        console.log("printing")
        botCardsEl.textContent += bot_cards[i]
        console.log(bot_cards[i])
        botCardsEl.textContent += " "
        console.log(botCardsEl.textContent)
    }
    botSumEl.textContent = "Sum: " + bot_sum
    if (bot_sum == 21) {
        bot_win = true
    }
    renderGame()
}

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
    if (skippedTurns) {
        if (bot_win) {
            messageEl.textContent = "You lost to the dealer! 😭"
            gameStart = false
            document.getElementById("dealerTurn").disabled = true;
            document.getElementById("newCard").disabled = true;
        } else {
            messageEl.textContent = "You win! The dealer busted! 😎"
            gameStart = false
            document.getElementById("dealerTurn").disabled = true;
            document.getElementById("newCard").disabled = true;
        }
    } else {
        if (hasBlackjack) {
            messageEl.textContent = "Wohoo! You've got Blackjack! 🥳"
            gameStart = false
            document.getElementById("dealerTurn").disabled = true;
            document.getElementById("newCard").disabled = true;
        } else if (isAlive) {
            messageEl.textContent = "Do you want to draw a new card? 🙂"
        } else {
            messageEl.textContent = "You're out of the game! 😭"
            gameStart = false
            document.getElementById("dealerTurn").disabled = true;
            document.getElementById("newCard").disabled = true;
        }
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
    } else if (randomNumber > 9) {
        return 10
    }
    else return randomNumber
}

function startGame() {
    document.getElementById("dealerTurn").disabled = false;
    document.getElementById("newCard").disabled = false;
    document.getElementById("startGame").textContent = "Restart game"
    botCardsEl.textContent = "Dealer Cards: "
    console.log("reset")
    botSumEl.textContent = "Dealer Sum: "
    isAlive = true
    cards = []
    sum = 0
    hasBlackjack = false
    bot_cards = []
    bot_sum = 0
    bot_win = false
    skippedTurns = false
    newCard()
    newCard()
    renderGame()
}