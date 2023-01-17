var timeLeft = 75;
var currentQuestionIndex = 0;
var currentQuestion
var score = 0;
var timerId



// 1 .On page load, hide the questions and end screen elements, and display the start screen element.
document.getElementById("questions").classList.add("hide");
document.getElementById("end-screen").classList.add("hide");


// 2. When the start button is clicked:
//  - Start the timer
document.getElementById("start").addEventListener("click", function() {
  //  - Select a random set of questions from the allQuestions array
selectRandomQuestions();
showQuestion();
    // Start timer
    timerId = setInterval(function() {
      timeLeft--;
      document.getElementById("time").innerHTML = timeLeft;
      if ((timeLeft === 0) || (currentQuestionIndex === 4)) {
        endQuiz();
      }
    }, 1000);

    // initialize endquiz function
function endQuiz() {
  clearInterval(timerId);
  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");
  document.getElementById("final-score").innerHTML = timeLeft;
}


//  - Hide the start screen element and display the questions element
document.getElementById("start-screen").classList.add("hide");
document.getElementById("questions").classList.remove("hide");
});

//  - Display the first question and its choices
function showQuestion() {
    
    var currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-title").innerHTML = currentQuestion.question;

    var choices = document.getElementById("choices");
    choices.innerHTML = "";
    
    // iterate through question choices 
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.innerHTML = currentQuestion.choices[i];
        (function(index) {
          choiceButton.addEventListener("click", function() {
            // check if answer is correct
            if (this.innerHTML === questions[currentQuestionIndex].answer) {
              score++;
              document.getElementById("feedback").innerHTML = "Correct!!";
            } else {
              timeLeft -= 10;
              document.getElementById("feedback").innerHTML = "No Dice!!";
              }
            // show next question
            currentQuestionIndex++;
            if (currentQuestionIndex === 4) {
              endQuiz();
            } else {
              showQuestion();
            }
            });
          })(i);
          choices.appendChild(choiceButton);
     }
}

// Submit high score
document.getElementById("submit").addEventListener("click", function() {

  var initials = document.getElementById("initials").value;
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  highscores.push({initials: initials, score: timeLeft});
  localStorage.setItem("highscores", JSON.stringify(highscores));
  window.location.href = "highscores.html";
});

// Display high scores on highscores html page
document.addEventListener("DOMContentLoaded", function() {

  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  var highscoresList = document.getElementById("highscores-list");
  
  for (var i = 0; i < highscores.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = highscores[i].initials + " - " + highscores[i].score;
    highscoresList.appendChild(li);
  }
});


//  - Display the next question
// 4. When all questions have been answered or the timer reaches 0:
//  - Stop the timer
//  - Hide the questions element and display the end screen element
//  - Display the final score
//  - Allow the user to enter their initials and submit their score
// 5. On the highscores page, display a list of previous high scores and allow the user to clear the high scores.
// 6. Store the high scores in local storage so that they persist even after the browser is closed.