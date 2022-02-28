let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sortFruits() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "apple") {
            appleShelf.textContent += "apple"
        } else if (fruit[i] === "orange") {
            orangeShelf.textContent += "orange"
        }
    }
}

sortFruits()
