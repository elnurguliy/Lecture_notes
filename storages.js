window.addEventListener("DOMContentLoaded", main);

function main() {
    loadUserInfo();
    addEventListeners();
}


function addEventListeners() {
    nameForm.onsubmit = saveUserInfo;
}


function saveUserInfo(event) {
    event.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let age = document.getElementById("age").value;
    let spouse = document.getElementById("spouse").value;
    let salary = document.getElementById("salary").value;

    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("age", age);
    localStorage.setItem("spouse", spouse);
    localStorage.setItem("salary", salary);

    // window.location.href = "index2.html";
    
}

function loadUserInfo() {
    // const name = localStorage.name;
    const name = localStorage.getItem("firstname")

    if(name) {
        userGreeting.textContent = "Welcome back " + name;
    }
}

