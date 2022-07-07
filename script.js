
const PIXEL_COUNT = 4
const pixels = []

// Populate grid with unique pixels
for (let i = 0; i < PIXEL_COUNT; i++) {
    pixels[i] = document.createElement('div')
    pixels[i].className = 'pixel'
    pixels[i].id = 'pixel' + i
    document.getElementById("canvas").appendChild(pixels[i])
}

// Listen to user interaction on the canvas
const canvas = document.getElementById("canvas")
canvas.onclick = function(event) {
    // Where was the click?
    let target = event.target;      

    // Do something when the user clicks a pixel
    if (target.className == "pixel") {
        console.log("lol")
    }
    console.log(target.id)
}

