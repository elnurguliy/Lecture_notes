// Körs när sidan laddas
window.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("Exchange calculator initialized");

    document.getElementById("exchange-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Förhindrar att sidan laddas om
        exchange();
    });
}

function exchange() {
    let amountInput = document.getElementById("amount").value;
    let amount = Number(amountInput);

    if (isNaN(amount) || amount <= 0) {
        displayResult("Invalid input. Please enter a positive number.");
        return;
    }


    let resultText = document.getElementById("result-text")
    resultText.innerText = amount + " SEK is equal to: ";
    let resultList = document.getElementById("result-list");
    resultList.innerHTML = "";

    let denominations = [100, 50, 20, 10, 5, 2, 1];

    for (let denom of denominations) {
        let count = Math.floor(amount / denom);
        if (count > 0) {
            let listItem = document.createElement("li");
            listItem.textContent = `${count} x ${denom} SEK`;
            resultList.appendChild(listItem);
        }
        amount -= count * denom;
    }
}

function displayResult(message) {
    // Uppdaterar innehållet i `result`-diven
    document.getElementById("result").innerHTML = message;
}


const bird = document.getElementById("bird");

let posX = Math.random() * window.innerWidth;
let posY = Math.random() * window.innerHeight;

let speedX = Math.random() * 2 + 1;
let speedY = Math.random() * 2 + 1;

function moveBird() {
    posX += speedX;
    posY += speedY;

    if (posX > window.innerWidth) {
        posX= - 50;
    }
    if (posY > window.innerHeight) {
      posY = -50; 
    }
    if (posX < -50) {
      posX = window.innerWidth;
    }
    if (posY < -50) {
      posY = window.innerHeight; 
    }

    bird.style.left = posX + 'px';
    bird.style.top = posY + 'px';
  }

  // Anropa moveBird varje 20 millisekunder för att flytta fågeln
  setInterval(moveBird, 20);

