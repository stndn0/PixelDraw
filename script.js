
const PIXEL_COUNT = 1024
const pixelWidth = 16
const pixelHeight = 16
let pixels = []

// DOM elements
const canvas = document.getElementById("canvas")
const gridSizeSlider = document.getElementById("myRange");
const gridSizeText = document.getElementById("grid-size");


// Load canvas information. Populate grid with unique pixels.
// for (let i = 0; i < PIXEL_COUNT; i++) {
//     pixels[i] = document.createElement('div')
//     pixels[i].className = 'pixel'
//     pixels[i].id = 'pixel' + i
//     document.getElementById("canvas").appendChild(pixels[i])
// }
setCanvasParams(gridSizeSlider.value, gridSizeSlider.value, gridSizeSlider.value * gridSizeSlider.value)


// Adjust size of grid based on user input
gridSizeSlider.oninput = function () {
    gridSizeText.innerHTML = "Grid size: " + gridSizeSlider.value + " x " + gridSizeSlider.value;
    setCanvasParams(gridSizeSlider.value, gridSizeSlider.value, gridSizeSlider.value * gridSizeSlider.value)
}


// Listen to user interaction on the canvas
window.addEventListener("mouseover", function (e) {
    // Where was the click?
    let target = e.target;
    console.log("DEBUG: Current target:", target.id)

    // If user only clicks on one pixel
    canvas.addEventListener('mousedown', (event) => {
        console.log("DEBUG: Mouse is DOWN")
        let target = event.target;
        if (target.className == "pixel") {
            document.getElementById(target.id).style.backgroundColor = "red";
        }
    })

    canvas.addEventListener('mouseup', (event) => {
        console.log("DEBUG: Mouse is UP")
    })

    // If user holds down LMB on multiple pixels
    if (e.buttons == 1 || e.buttons == 3) {
        console.log("DEBUG: Mouse LEFT CLICK")
        if (target.className == "pixel") {
            document.getElementById(target.id).style.backgroundColor = "red";
        }
    }
})


function setCanvasParams(pixelWidth, pixelHeight, PIXEL_COUNT) {
    // Delete existing divs
    const pixelDivs = document.querySelectorAll('.pixel');
    pixelDivs.forEach(pixel => {
        pixel.remove();
    })
    pixels = []

    for (let i = 0; i < PIXEL_COUNT; i++) {
        pixels[i] = document.createElement('div')
        pixels[i].className = 'pixel'
        pixels[i].id = 'pixel' + i
        document.getElementById("canvas").appendChild(pixels[i])
        pixels[i].style.width = pixelWidth / 2  + "px"
        pixels[i].style.height = pixelHeight / 2 + "px"
    }
}