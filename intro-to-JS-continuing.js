
// Övning 1

function promptUser(){
    let namePrompt = prompt("What is your name?");
    let agePrompt = prompt ("What is your age");
    let workPrompt = prompt ("Your work");
    let salaryPrompt = prompt ("Your salary");
    let martialStatusPrompt = prompt ("Married or not?");

    console.log(martialStatusPrompt);
    console.log(salaryPrompt);
    console.log(workPrompt);
    console.log(agePrompt);
    console.log(namePrompt);
};


// Övning 2


function solveEquation(){
    let integer = prompt("Enter an integer");
    let operator = prompt("Enter an mathematical operator: +. -, *, /");
    let anotherInteger = prompt("Enter another integer");

    let result = integer + operator + anotherInteger;

    alert(eval(result));

};

// Övning 3


function toggleTheme(){

    const body = document.body;
    const button = document.getElementById('buttonName');


    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");



    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Dark Mode';
        
    } else {
        button.textContent = 'Light Mode';
    }

    

};

// function switchModeToDark(){
//     document.body.classList.remove("light-mode");

//     document.body.classList.add("dark-mode");


// }

// function switchModeToLight(){
//     document.body.classList.remove("dark-mode");

//     document.body.classList.add("light-mode");
// }

