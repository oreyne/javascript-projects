// let age = 20
//
// if (age < 21){
//   console.log("You can not enter the club!");
// } else {
//   console.log("Welcome!");
// }

// ------------------------------
// age = 44
//
// if (age < 100) {
//   console.log("Not elegible");
// } else if (age == 100) {
//   console.log("Here is your birthday card from the King!");
// } else {
//   console.log("Not elegible, you have alredy gotten one");
// }

// ------------------------------

let firstCard = getRandomCard(), secondCard = getRandomCard(), isAlive = true, hasBlackjack = false
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")
let message = "Want to play a round?"
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

function renderTime(){
  sumEl.textContent = "Sum: " + sum
  cardEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
  }

  if (sum <= 20){
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!!"
    hasBlackjack = true
  } else {
    isAlive = false
    message = "You're out of the game"
  }
  messageEl.textContent = message
}

function startGame(){
  renderTime()
}

function newCard() {
  console.log("Drawing a new card");
  let newCard = getRandomCard()
  cards.push(newCard)
  sum += newCard
  renderTime()
}

function getRandomCard() {
  let value = Math.floor(Math.random() * 13) + 1

  if (value === 1) {
    return 11
  }

  if (value > 10) {
    return 10
  }

  return value
}
// ----------------------------------

// let experiences = ['ETI', "Lombao Estudios", "L6"]
//
// let life = [32, "Oreyne", true]
//
// life.push("web engineer")
//
// console.log(life)
//
// experiences.push("Same here")
//
// console.log(experiences)
//
// let last = experiences.pop()
// console.log(last)
// console.log(experiences)

// ----------------------------------

for (let i = 10; i < 101; i+= 10){
  // console.log(i);
}



















//
