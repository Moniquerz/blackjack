let firstCard = randomCard();
let secondCard = randomCard();
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

function randomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard > 10) {
        return 10
    } else if(randomCard === 1){
        return 11
    } else {
        return randomCard
    }
}

function start() {
    renderGame();
}


function renderGame() {
    sumEl.textContent = `Sum: ${sum}`

    cardsEl.textContent = `Cards: `

    for(let i = 0; i <cards.length; i ++){
        cardsEl.textContent += ` ${cards[i]}`
    }

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
    if(isAlive === true && blackjack === false){
        let card= randomCard();
        sum+= card;
        cards.push(card)
        renderGame();
    }
}
