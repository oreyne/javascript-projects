let myLeads = []
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("input-btn")
const tabEl = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-btn")

function insertItenInList(item) {
  const liEl = document.createElement("li")
  const aEl = document.createElement("a")
  aEl.textContent = item
  aEl.href = item
  liEl.append(aEl)
  ulEl.append(liEl)
}

function renderItems(list) {
  ulEl.innerHTML = ""
  list.map((item) => {
    insertItenInList(item)
  })
}

deleteEl.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  renderItems(myLeads)
})

tabEl.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    insertItenInList(tabs[0].url)
  })
})

btnEl.addEventListener("click", function(){
  myLeads.push(inputEl.value)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  insertItenInList(inputEl.value)
  inputEl.value = ""
  console.log(localStorage.getItem("myLeads"));
})

if (localStorage.getItem("myLeads")) {
  myLeads = JSON.parse(localStorage.getItem("myLeads"))
  renderItems(myLeads)
}

// const myLead = `["www.google.com"]`
// let ylEl = JSON.parse(myLead)
// ylEl.push('www.apple.com')
// console.log(JSON.stringify(ylEl));
// console.log(typeof JSON.stringify(ylEl));
// const recipent = "James"
// const sender = "Oreyne"
//
// const email = "Hey " + recipent + "! How is it going? Cheers Per"
// const correo = `Hey ${recipent}!
// How is it going?
// Cheers ${sender}`
//
// console.log(email)
// console.log(correo)
