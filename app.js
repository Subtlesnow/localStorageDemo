// let taco = {
//   meat: "beef",
//   shell: "corn",
//   toppings: ["lettuce", "tomato", "cheese"]
// }
//
// let addTaco = localStorage.setItem('tacoTime', JSON.stringify(taco))
//
// let candy = ["Snickers", "Skittles", "Twizzlers", "peanuts"];
//
// let bools = [true, false, true, false]
// let saveBool = localStorage.setItem('allBools', bools)
//
// let browserCandy = localStorage.setItem("manyCandies", candy)
//
// let newWords = "Hello"
// let greeting = localStorage.setItem("message", newWords)
//
// let num = 23
// let jordan = localStorage.setItem("jordan", num)
//
// let getJordan = JSON.parse(localStorage.getItem(jordan))


let form = document.querySelector('form')
let ul = document.querySelector('ul')
let button = document.querySelector('button')
let input = document.getElementById('item')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

let liMaker = (text) => {
  let li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('itemsArray', JSON.stringify(itemsArray))

  liMaker(input.value)
  input.value = ""
})

data.forEach(item => {
  liMaker(item)
})

button.addEventListener('click', () => {
  localStorage.clear()
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})
