let body = document.body
let state = [false, false, false, false]
function createSquare(name, w, h, x, y, display, color) {
    let square = document.createElement("div")
    square.style.backgroundColor = color
    square.style.position = "relative"
    square.style.left = x + "px"
    square.style.top = y + "px"
    square.style.width = w + "px"
    square.style.height = h + "px"
    square.className = name
    display.appendChild(square)
    return square
}
function loadImage(name, img, x, y, w, h, display) {
    let image = document.createElement("img")
    image.src = img
    image.style.position = "absolute"
    image.style.left = x + "px"
    image.style.top = y + "px"
    image.style.width = w + "px"
    image.style.height = h + "px"
    image.className = name
    display.appendChild(image)
    return image
}
function createCanvas(name, w, h, display) {
    let canvas = document.createElement("div")
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"
    canvas.className = name
    display.appendChild(canvas)
    return canvas
}
function setBackground(target, color) {
    target.style.backgroundColor = color
}
function addText(name, text, x = 8, y = 8, display) {
    let txt = document.createElement("div")
    txt.style.position = "absolute"
    txt.style.left = x + "px"
    txt.style.top = y + "px"
    txt.append(text)
    txt.className = name
    display.appendChild(txt)
    return txt
}
function setText(tar, txt) {
    let text = document.querySelector("." + tar)
    text.replaceChildren(txt)
}
function loop(func) {
    setInterval(function () {
        func()
    }, 90)
}
function setX(target, x){
    target.style.left = x + "px"
}
function setY(target, y){
    target.style.top = y + "px"
}
function controller(){
    window.addEventListener("keydown", function (ev) {
        if (ev.key == "w") {
            state[0] = true;
        } else if (ev.key == "s") {
            state[1] = true;
        } else if (ev.key == "a"){
            state[2] = true;
        } else if (ev.key == "d"){
            state[3] = true;
        }
    })
    window.addEventListener("keyup", function (ev) {
        if (ev.key == "w") {
            state[0] = false;
        } else if (ev.key == "s") {
            state[1] = false;
        } else if (ev.key == "a"){
            state[2] = false;
        } else if (ev.key == "d"){
            state[3] = false;
        }
    })
}
function replaceImage(name, image){
    let i = document.querySelector("."+name)
    i.src = image;
}
function playSound(path){
    let audio = new Audio(path);
    audio.play()
}
function random(number){
    let rand = Math.floor(Math.random() * number)
    return rand
}
function setTextColor(text, color) {
    text.style.color = color
}