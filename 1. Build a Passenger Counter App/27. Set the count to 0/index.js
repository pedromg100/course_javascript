let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    saveCount()
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    saveCount()
}

function saveCount() {
    countEl.textContent = count
}