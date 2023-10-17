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
  num = num + 1
  zahl.textContent = num
}