const logBtn = document.getElementById("log-btn")

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]
let soughtPlayer = "Jane"

logBtn.addEventListener("click", function() {
    for (let i=0; i<data.length;i++){
        if (data[i].player == soughtPlayer) {
            console.log(`${data[i].player}'s score: ${data[i].score}`)
            return
        }
    }
    console.log(`Player ${soughtPlayer} not found`)
})

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
