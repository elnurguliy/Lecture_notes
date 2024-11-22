window.addEventListener("DOMContentLoaded", main);
window.addEventListener("resize", setCanvasSize);


/**
 * Called when the DOM is ready.
 * Gets the canvas element and sets its size to match the window.
 * Then it calls draw to draw something on the canvas.
 */
function main() {
    console.log("Canvas initialized");

    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    setCanvasSize();
    draw(ctx);
}

/**
 * Draws something on the canvas.
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 */
function draw(ctx) {
    ctx.fillStyle = "tomato";
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);

}

/**
 * Gets the canvas element and sets its size to match the window.
 * Then it calls draw to draw something on the canvas.
 */
function setCanvasSize() {
    const canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    draw(ctx);

}
