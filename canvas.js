window.addEventListener("DOMContentLoaded", main);
// window.addEventListener("resize", setCanvasSize);


/**
 * Called when the DOM is ready.
 * Gets the canvas element and sets its size to match the window.
 * Then it calls draw to draw something on the canvas.
 */
function main() {
    console.log("Canvas initialized");
    drawPortrait();

    // let canvas = document.querySelector("canvas");
    // let ctx = canvas.getContext("2d");
    // setCanvasSize();
    // draw(ctx);
}

/**
 * Draws something on the canvas.
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 */
// function draw(ctx) {
//     ctx.fillStyle = "tomato";
//     ctx.strokeStyle = "green";
//     ctx.lineWidth = 5;

//     ctx.fillRect(25, 25, 100, 100);
//     ctx.clearRect(45, 45, 60, 60);
//     ctx.strokeRect(50, 50, 50, 50);

// }

// /**
//  * Gets the canvas element and sets its size to match the window.
//  * Then it calls draw to draw something on the canvas.
//  */
// function setCanvasSize() {
//     const canvas = document.querySelector("canvas");
//     let ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     draw(ctx);

// }




function drawPortrait() {

    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");

    // **1. Rita ansiktets huvudform**
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, 2 * Math.PI); // Cirkeln för ansiktet
    ctx.fillStyle = "#FFCC99"; // Hudfärg
    ctx.fill();
    ctx.stroke();

    // **2. Ögon**
    // Vänster öga
    ctx.beginPath();
    ctx.arc(120, 120, 10, 0, 2 * Math.PI); // Litet cirkulärt öga
    ctx.fillStyle = "#FFFFFF"; // Vit färg för ögat
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(120, 120, 5, 0, 2 * Math.PI); // Pupillen
    ctx.fillStyle = "#000000"; // Svart pupill
    ctx.fill();

    // Höger öga
    ctx.beginPath();
    ctx.arc(180, 120, 10, 0, 2 * Math.PI); // Litet cirkulärt öga
    ctx.fillStyle = "#FFFFFF"; // Vit färg för ögat
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(180, 120, 5, 0, 2 * Math.PI); // Pupillen
    ctx.fillStyle = "#000000"; // Svart pupill
    ctx.fill();

    // **3. Näsa**
    ctx.beginPath();
    ctx.moveTo(150, 140); // Startpunkt för näsan
    ctx.lineTo(145, 160); // Näsans vänstra kant
    ctx.lineTo(155, 160); // Näsans högra kant
    ctx.closePath();
    ctx.stroke();

    //Mun
    ctx.beginPath();
    ctx.arc(150, 60, 140, Math.PI * 0.4, Math.PI * 0.6); 
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(110, 100);
    ctx.lineTo(130, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(170, 100);
    ctx.lineTo(190, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(140, 180, 10, Math.PI, 2 * Math.PI, false);
    ctx.arc(160, 180, 10, Math.PI, 2 * Math.PI, false);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.stroke();


}


