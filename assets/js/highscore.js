var highScore = document.querySelector("#highScore")
var clear = document.querySelector("#clear")
var goBack = document.querySelector("#goBack");

// get scores from localStorage, convert from string
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

// if allScores is not empty, create li element with object key
if (allScores !== null) {
    for (var i = 0;  i < allScores.length; i++) {
        var listItem = document.createElement("li");
        listItem.setAttribute("class", "scoreCard");
        listItem.textContent = allScores[i].initials + " : " + allScores[i].score;
        highScore.appendChild(listItem);
    }
}


// click event to clear localStorage and reload page
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// click event to return to main index.html page
goBack.addEventListener("click", function() {
   location.replace("./index.html");
})