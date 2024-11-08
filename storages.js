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
    const nameInput = document.getElementById("name");
    localStorage.setItem("name", nameInput.value);
    
    loadUserInfo();
}

function loadUserInfo() {
    // const name = localStorage.name;
    const name = localStorage.getItem("name")

    if(name) {
        userGreeting.textContent = "Welcome back " + name;
    }
}

