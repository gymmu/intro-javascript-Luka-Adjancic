function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}

function deleteText() {
  const deleteTextElem = document.querySelector("#to-delete")
  deleteTextElem.textContent = "Inhalt gelöscht"
}

function incrementCounter() {
  const zahl = document.querySelector("#counter")
  let num = parseInt(zahl.textContent)
  num += 1
  zahl.textContent = num + " Cookies"
}

function decrementCounter () {
  const zahl = document.querySelector("#counter")
  let num = parseInt(zahl.textContent)
  num -= 1
  zahl.textContent = num + " Cookies"
}

function resetCounter () {
  const zahl = document.querySelector("#counter")
  let num = parseInt(zahl.textContent)
  num = 0
  zahl.textContent = num
}

function writeText () {
  const output = document.querySelector("#output")
  const input = document.querySelector("#input")
  output.textContent = "\n" + input.value
}
/*
let i = 0;

for (i = 0; i < 100; i++) { 
  alert(i + "Memet beobachtet dich!");
}

alert(i);
*/

function backgroundSlider () {
  const alpha = document.querySelector("#sliderAlpha")
  const red = document.querySelector("#sliderRed")
  const green = document.querySelector("#sliderGreen")
  const blue = document.querySelector("#sliderBlue")
  const body = document.querySelector("body")
  body.style.backgroundColor = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value / 100})`
}