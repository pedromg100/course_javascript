
const container = document.getElementById("container")

container.innerHTML = "<button id='btn-el'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
const btnEl = document.getElementById("btn-el")
btnEl.addEventListener("click", purchase)

function purchase() {
    console.log("Thank you for buying!")
    container.innerHTML += "<p>Thank you for buying!</p>"
}
