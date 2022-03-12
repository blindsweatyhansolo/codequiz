var clear = document.querySelector("#clear")
var goBack = document.querySelector("#goBack");


// click event to clear localStorage and reload page
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// click event to return to main index.html page
goBack.addEventListener("click", function() {
   location.replace("./index.html");
})