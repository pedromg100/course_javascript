// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const containerEl = document.getElementById("container")

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function renderImages(imagesArray, element) {
    let imagesStr = ""
    for (let i=0; i<imagesArray.length; i++) {
        imagesStr += `<img class="team-img" src="${imagesArray[i]}">`
    }
    element.innerHTML = imagesStr
}

renderImages(imgs, containerEl)
