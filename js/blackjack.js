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

let isAlive = false, hasBlackjack = false
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")
let message = "Want to play a round?"
let cards = []
let sum = 0

let player = {
  name: "Oreyne",
  chips: 145
}
playerEl.textContent = player.name + ": $" + player.chips

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
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderTime()
}

function newCard() {
  if (isAlive && !hasBlackjack){
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderTime()
  }
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

// function multiplyBySum(a, b){
//   let sum = 0
//   let positivo = Math.abs(b) == b
//   for (var i = 0; i < b; i++)
//     sum = positivo ? sum + a : sum - a
//
//   console.log(positivo);
//   return sum
// }
//
// console.log(multiplyBySum(-3, -3));
//
// const arrayA = [3, 4, 6, 6, 7, 1, 3]
//
// console.log(arrayA.reduce((acc, el) => acc < el ? acc : el))
//
// const test = [1, undefined, null, 0, 3, 12]
//
// console.log(test.reduce((acc, el) => {
//   if (el){
//     acc.push(el)
//   }
//   return acc
// }, []))
// -------------------------------
let accommodation = {
  name: "Castle Rock",
  rooms: 4,
  pricePerNight: 190,
  isFavorite: false,
  services: ["breakfast", "wifi"]
}

console.log(accommodation.rooms);
console.log(accommodation["isFavorite"]);
















//
