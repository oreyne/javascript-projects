//document.getElementById("count-el").innerText = 53; // 1

// let count = 0
// console.log(count)

// console.info(myAge)
// let myAge = 32
// console.info(myAge)
// ----------------------------
// let humanDogAge = 7
// let myDogAge = myAge * humanDogAge
// console.info(myDogAge)
//
// let bonusPoints = 50
// bonusPoints += 100
// bonusPoints -= 25
// bonusPoints += 70
// console.log(bonusPoints)

// function increment() {
//   console.log("asdsad");
// }
// ----------------------------
// let lap1 = 34, lap2 = 33, lap3 = 36;
// let lapsCompleted = 0;
//
// function showNumberFortyTwo() {
//   console.log(42);
//   console.log(lap1 + lap2 + lap3);
//   lapsCompleted++;
// }
//
// showNumberFortyTwo();
// showNumberFortyTwo();
// showNumberFortyTwo();
// console.log(lapsCompleted)
 // ----------------------------
// let count = 0;
//
// function increment() {
//   count++;
//   console.log(count);
//   document.getElementById('count-el').innerText = count;
// }
//
// function save() {
//   console.log(count);
// }
//  ----------------------------
// let username = "per"
// let notifications = "You have three new notifications"
// let messageToUser = notifications + ", " + username + "!"
// console.log(messageToUser)
//
// let name = "Oreyne"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
//
// console.log(myGreeting)
//
// console.log(4 + 5)
// console.log(5 + "1")
// console.log(4 + "10")
// console.log("100" + "100")
// ----------------------------
// let welcomeEl = document.getElementById('welcome-el')
// let name = "Oreyne L."
// let welcomeMessage = "Welcome to America Airline, "
//
// welcomeEl.innerText = welcomeMessage + name
//
// // Adding emoji
// welcomeEl.innerText += "*"
// ----------------------------

// let count = 0;
// let welcomeEl = document.getElementById('welcome-el')
// let countEl = document.getElementById('count-el')
//
// function increment() {
//   count++;
//   console.log(count);
//   countEl.textContent = count;
// }
//
// function save() {
//   let countToSave = count + " - "
//   welcomeEl.textContent += countToSave
//   count = 0
//   countEl.textContent = 0
// }

// ----------------------------

// let firstName = "Oreyne"
// let lastName = "Lang"
// let fullName = firstName + " " + lastName
//
// function showMyname() {
//   console.log("Hi there, " + fullName + "!")
// }
//
// showMyname()
// ----------------------------

// let myPoints = 3
//
// function add3Points(){
//   myPoints += 3
// }
//
// function remove1Point(){
//   myPoints--
// }
//
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
//
// console.log(myPoints)
// ----------------------------

// function showError() {
//   document.getElementById("error-el").textContent = "Something went wrong, please try again"
// }
// ----------------------------
// let num1 = 4
// let num2 = 6
// document.getElementById("num-one").textContent = num1
// document.getElementById("num-two").textContent = num2
//
// function sum() {
//   document.getElementById("result").textContent = "Sum: " + (num1 + num2)
// }
//
// function subtract() {
//   document.getElementById("result").textContent = "Subtract: " + (num1 - num2)
// }
//
// function divide() {
//   document.getElementById("result").textContent = "Divide: " + (num1 / num2)
// }
//
// function multiply() {
//   document.getElementById("result").textContent = "Multiply: " + (num1 * num2)
// }
// ----------------------------
let firstCard, secondCard

firstCard = 6
secondCard = 3

let sum = firstCard + secondCard + 123

if (sum < 21){
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("Wohoooooo! You've got Blackjack!!");
} else {
  console.log("You're out of the game");
}

console.log(sum)
//
