
const PIXEL_COUNT = 4
const pixels = []

// Populate grid with unique pixels
for (let i = 0; i < PIXEL_COUNT; i++) {
    pixels[i] = document.createElement('div')
    pixels[i].className = 'pixel'
    pixels[i].id = 'pixel' + i
    document.getElementById("canvas").appendChild(pixels[i])
    pixels[i].addEventListener("click", clickListener)
}

// Event listener - user clicks a pixel, get pixel info
// https://javascript.info/event-delegation
// https://stackoverflow.com/questions/31785614/dynamically-created-div-behavior-on-button-click
function clickListener() {
    for (let i = 0; i < PIXEL_COUNT; i++) {
        console.log(document.getElementById(pixels[i].id))
    }
    // console.log(document.getElementsByClassName("pixel"))
    // document.getElementById("pixel").style.width = '300px';
}

// const canvas = document.getE

