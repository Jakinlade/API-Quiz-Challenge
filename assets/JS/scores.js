//  retrieve highscores from local storage
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// sort scores from highest to lowest
highscores.sort((a, b) => b.score - a.score);

// update highscores on page
for (var i = 0; i < highscores.length; i++) {
    var highscore = highscores[i];
    var li = document.createElement("li");
    li.innerHTML = `${highscore.initials} - ${highscore.score}`;
    document.getElementById("highscores").appendChild(li);
}

// add an event listener for the clear button
document.getElementById("clear").addEventListener("click", function() {
    localStorage.removeItem("highscores");
    location.reload();
});

// add event listener for the submit button
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    let initials = document.getElementById("initials").value;
    let score = document.getElementById("final-score").innerHTML;
    highscores.push({initials: initials, score: score});
    localStorage.setItem("highscores", JSON.stringify(highscores));
    location.href = "highscores.html";
});