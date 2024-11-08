
// // //FÖRELÄSNING GENOMGÅNG START

// // //Kör main funktionen när domen är laddad.
window.addEventListener("DOMContentLoaded", main);


// Globalt tillstånd för vår applikation
const todoList = ["Städa", "Handla mat", "Träna", "Laga mat"];

// Här startar applikationen
function main(){
    saveToDoButton.onclick = saveTodo;
    renderToDoList();
}

//Skriver ut listan en för en
function renderToDoList(){

    todoListElement.innerText = "";
    //för varje sak i listan
    for(const todo of todoList) {
        const list = document.createElement("li"); //skapa tagg
        list.textContent = todo;   // sätt text
        todoListElement.append(list);

    }
}

//Händer när användaren klickar på "save" knappen

function saveTodo(){
    todoList.push(todoInput.value);
    renderToDoList();
}

// //FÖRELÄSNING GENOMGÅNG SLUT




// /* 1. 
// Skapa en array som innehåller 5 bilmärken (direkt i global-scope). Anropa sedan console.log och skicka med arrayen för att se dess innehåll. 
// */

// function main() {
//     displayButton.onclick = showTheList;
//     removeCar.onclick = removeItem;
//     addCar.onclick = addItem;
//     promtUser.onclick = enterNewBrand;
//     searchButton.onclick = findBrand;
// }

// const carBrands = ["Honda", "Toyota", "Kia"];

// function showTheList() {
    
//     console.log(carBrands);
// }

// /* 2. 
// Lägg till en knapp på sidan som anropar en funktion. Funktionen ska ta bort sista elementet ur arrayen och sedan logga ut arrayes innehåll.
// */

// function removeItem () {
//     carBrands.pop();
//     console.log(carBrands);
// }

// /* 3. 
// Lägg till ytterliggare en knapp på sidan som anropar en ny funktion. 
// I den här funktionen ska du öppna en prompt som ber om ett nytt bilmärke att lägga till i listan. 
// Ta svaret från prompten och lägg till det i slutet av listan, logga sedan ut listan för att se att allt fungerar.
// */

// function addItem () {
//     carBrands.push(newBrand.value);
//     console.log(carBrands);
// }

// /* 4. 
// Lätt till en sista knapp på sidan som anropar entredje funktion. 
// Funktionen ska öppna en promt som låter användaren söka efter/välja ut ett bilmärke. 
// När du har sparat värdet från prompten skall du loopa igenom hela arrayen och leta efter värdet som matades in i promten. 
// Om du hittar elementet ska du logga ut det och avsluta loopandet. 
// Om värdet från promten inte matchade något i arrayen ska du logga ut att ingen matchning hittades.
//  */


// function enterNewBrand() {
//     let newItems = prompt("Add a brand");
//     carBrands.push(newItems);
//     console.log(carBrands);
// }


// function findBrand(){
//     let user = prompt("Search/Find").toLowerCase();
//     let found = false;

//     for (let i = 0; i < carBrands.length; i++){
//         if(user === carBrands[i].toLowerCase()){
//             console.log(carBrands[i], "finns i listan")
//             found = true;
//             break;
//         }
//     }

//     if (!found) {
//     alert(user + " finns inte i listan");
//     }
// }

