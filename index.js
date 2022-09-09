let firstCard = 8;
let secondCard = 10;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
// console.log(sum);
let blackjack = false;

let isAlive = true;

let message = ""
let messageEl = document.querySelector("#messageEl");
let sumEl = document.querySelector("#sumEl")
let cardsEl = document.querySelector("#cardsEl")
// console.log(messageEl)
// console.log(sumEl)

function start() {
    renderGame();
}


function renderGame() {
    sumEl.textContent = `Sum: ${sum}`

    cardsEl.textContent = `Cards: ${cards[0]} , ${cards[1]}`
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Blackjack! You're a winner!!!"
        blackjack = true;
    } else {
        message = "Bust"
        isAlive = false
    } 
  messageEl.textContent = message
}

function newCard() {
    let card= 2;
    sum+= card;
    cards.push(card)
    renderGame();
}
