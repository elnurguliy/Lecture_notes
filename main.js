

// const yourName = prompt("Vad heter du?")
// console.log(yourName);

// let number1 = prompt("Tänk på en siffra");
// console.log(number1);
// let number2 = prompt("Tänk på en annan siffra");
// console.log(number2);


// alert(Number(number1)+ Number(number2));
// console.log(alert);


//ÖVNINGAR START//

// 2.

// const yourName = prompt("Vad heter du?")
// console.log(yourName);

// 3.

// let number1 = prompt("Tänk på en siffra");
// console.log(number1);
// let number2 = prompt("Tänk på en annan siffra");
// console.log(number2);


// alert(Number(number1)+ Number(number2));
// console.log(alert);


// 4.

// let favaroiteColor = prompt("Vad är din favoritfärg?");

// function displayColor() {
//     console.log(favaroiteColor);
// }

// 5.

// const firstName = "";

// const lastName = "";

// function fullName(firstName, lastName) {
//     alert(firstName + " " + lastName);
// }

// fullName("Will", "Smith");


// Vidare övningar 

// 1.

// function changeText() {
//     let textOne = prompt("Ange din text");
//     let myID = document.getElementById("textID");
//     myID.innerText = textOne;

// }

// 2.

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function changeColors() {
    let div1 = document.getElementById("divValue1");
    let div2 = document.getElementById("divValue2");

     let h3_1 = document.getElementById("first_h3");
     let h3_2 = document.getElementById("second_h3");

     let color1 = getRandomColor();
     let color2 = getRandomColor();

     div1.style.backgroundColor = color1;
     div2.style.backgroundColor = color2;

     // Uppdatera h3-texten med den nya färgen
     h3_1.textContent = "Färg: " + color1;
     h3_2.textContent = "Färg: " + color2;

}


//ÖVNINGAR SLUT//






// let message = "Hello World";
// console.log("2nd ", message);

// message = "Hello";

// console.log(message);

// function changeBackgroundColor() {
//     const value = Math.random()
    
//     if(value > 0.8){
//         document.body.style.background = "#0dbfbf";
//     }else if (value > 0.6) {
//         document.body.style.background = "tomato";
//     }else if (value > 0.4) {
//         document.body.style.background = "lightered";

//     }else if (value > 0.2) {
//         document.body.style.background = "pink";
//     }else {
//         document.body.style.background = "lightered";
//     }
// };


// changeBackgroundColor();

// Shift + Alt + A  gives comments as following: /* */