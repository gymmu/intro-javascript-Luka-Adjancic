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