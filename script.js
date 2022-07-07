
const PIXEL_COUNT = 1024
const pixels = []

// DOM elements
const canvas = document.getElementById("canvas")
const gridSizeSlider = document.getElementById("myRange");
const gridSizeText = document.getElementById("grid-size");


// Populate grid with unique pixels
for (let i = 0; i < PIXEL_COUNT; i++) {
    pixels[i] = document.createElement('div')
    pixels[i].className = 'pixel'
    pixels[i].id = 'pixel' + i
    document.getElementById("canvas").appendChild(pixels[i])
}

// User controls
gridSizeSlider.oninput = function() {
    gridSizeText.innerHTML = "Grid size: " + gridSizeSlider.value + " x " + gridSizeSlider.value;
}


// Listen to user interaction on the canvas
window.addEventListener("mouseover", function (e) {
    // Where was the click?
    let target = e.target;
    console.log("DEBUG: Current target:", target.id)

    // If user only clicks on one pixel
    canvas.addEventListener('mousedown', (event) => {
        console.log("DEBUG: Mouse is DOWN")

        // Where was the click?
        let target = event.target;
        if (target.className == "pixel") {
            // For now, just change the pixel to red.
            document.getElementById(target.id).style.backgroundColor = "red";
        }
    })

    canvas.addEventListener('mouseup', (event) => {
        console.log("DEBUG: Mouse is UP")
    })

    // If user holds down LMB on multiple pixels
    if (e.buttons == 1 || e.buttons == 3) {
        console.log("DEBUG: Mouse LEFT CLICK")
        // Do something when the user clicks a pixel
        if (target.className == "pixel") {
            // For now, just change the pixel to red.
            document.getElementById(target.id).style.backgroundColor = "red";
        }
    }
})
