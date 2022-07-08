
const gridDefaultWidth = 32
const gridDefaultHeight = 32
const PIXEL_COUNT = gridDefaultWidth * gridDefaultHeight
let pixels = []

// DOM elements
const canvas = document.getElementById("canvas")
const gridSizeSlider = document.getElementById("myRange");
const gridSizeText = document.getElementById("grid-size");
const canvasResetBtn = document.getElementById("canvas-reset")

let canvasWidth = getComputedStyle(document.querySelector('#canvas')).width;
let canvasHeight = getComputedStyle(document.querySelector('#canvas')).height;
canvasWidth = parseInt(canvasWidth)         // Remove trailing 'px' from string
canvasHeight = parseInt(canvasHeight)


setCanvasParams(gridSizeSlider.value, gridSizeSlider.value, gridSizeSlider.value * gridSizeSlider.value)


// Adjust size of grid based on user input
gridSizeSlider.oninput = function () {
    gridSizeText.innerHTML = "Grid size: " + gridSizeSlider.value + " x " + gridSizeSlider.value;
    setCanvasParams(gridSizeSlider.value, gridSizeSlider.value, gridSizeSlider.value * gridSizeSlider.value)
}

canvasResetBtn.onclick = function () {
    setCanvasParams(gridDefaultWidth, gridDefaultHeight, PIXEL_COUNT)
    gridSizeSlider.value = gridDefaultWidth;
    gridSizeText.innerHTML = "Grid size: " + gridSizeSlider.value + " x " + gridSizeSlider.value;
}


// Listen to user interaction on the canvas
window.addEventListener("mouseover", function (e) {
    // Where was the click?
    let target = e.target;
    // console.log("DEBUG: Current target:", target.id)

    // If user only clicks on one pixel
    canvas.addEventListener('mousedown', (event) => {
        // console.log("DEBUG: Mouse is DOWN")
        let target = event.target;
        if (target.className == "pixel") {
            document.getElementById(target.id).style.backgroundColor = "red";
        }
    })

    // canvas.addEventListener('mouseup', (event) => {
    //     console.log("DEBUG: Mouse is UP")
    // })

    // If user holds down LMB on multiple pixels
    if (e.buttons == 1 || e.buttons == 3) {
        // console.log("DEBUG: Mouse LEFT CLICK")
        if (target.className == "pixel") {
            document.getElementById(target.id).style.backgroundColor = "red";
        }
    }
})


function setCanvasParams(gridWidth, gridHeight, PIXEL_COUNT) {
    // Delete existing divs
    const pixelDivs = document.querySelectorAll('.pixel');
    pixelDivs.forEach(pixel => {
        pixel.remove();
    })
    pixels = []


    for (let i = 0; i < PIXEL_COUNT; i++) {
        // Create div (pixel block) and give it a class and id
        pixels[i] = document.createElement('div')
        pixels[i].className = 'pixel'
        pixels[i].id = 'pixel' + i

        // GridWidth is the value from the grid size slider control.
        // Our canvas width is 800px. We want gridWidth number of pixels to fill the width.
        // Find the correct pixel size for gridWidth number of pixels to fill the width.
        // Note - subtract 2px. This is the left and right border for a pixel block.
        pixels[i].style.width = (canvasWidth / gridWidth) - 2 + "px";
        pixels[i].style.height = (canvasHeight / gridHeight) - 2 + "px";

        // Add div to the document
        document.getElementById("canvas").appendChild(pixels[i])
    }
}