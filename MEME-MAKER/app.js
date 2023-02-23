const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
    );
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 700;
ctx.lineWidth = lineWidth.value;
let isPainting = false;

function onMove(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    // ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
    isPainting = true;
}
function canclePainting() {
    isPainting = false;  
    ctx.beginPath();  
}
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value = colorValue;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleave", canclePainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click",
onColorClick));

/**ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 2;
ctx.fillRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);

ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();**/

// ctx.fillRect(200, 200, 15, 100);
// ctx.fillRect(365, 200, 15, 100);
// ctx.fillRect(260, 200, 60, 200);
// ctx.arc(290, 130, 50, 0, 2*Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.arc(310, 125, 8, 1*Math.PI, 2*Math.PI);
// ctx.arc(270, 125, 8, 1*Math.PI, 2*Math.PI);
// ctx.fill();

// const colors = [
//     "#cd84f1",
//     "#ffcccc",
//     "#ff4d4d",
//     "#ffaf40",
//     "#fffa65",
//     "#32ff7e",
//     "#7efff5",
//     "#18dcff",
//     "#7d5fff",
//     "#4b4b4b"
// ];

// ctx.lineWidth = 2;

// function onClick(event) {
//     ctx.beginPath();
//     ctx.moveTo(350, 350);
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// canvas.addEventListener("mousemove", onClick);