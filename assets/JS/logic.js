var timeLeft = 75;
var currentQuestion = 0;
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
      if (timeLeft === 0) {
        endQuiz();
      }
    }, 1000);

    // initialize endquiz function
function endQuiz() {
  clearInterval(timerId);
  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");
  document.getElementById("final-score").innerHTML = score;
}


//  - Hide the start screen element and display the questions element
document.getElementById("start-screen").classList.add("hide");
document.getElementById("questions").classList.remove("hide");
});

//  - Display the first question and its choices
function showQuestion() {
    var currentQuestionIndex = 0;
    var currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-title").innerHTML = currentQuestion.question;

    var choices = document.getElementById("choices");
    choices.innerHTML = "";
    
    // iterate through question choices 
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.innerHTML = currentQuestion.choices[i];
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
          if (currentQuestionIndex === questions.length) {
            endQuiz();
          } else {
            showQuestion();
          }
          });
          choices.appendChild(choiceButton);
    }
}



// 3. When an answer choice is clicked:
//  - Check if the answer is correct
//  - If the answer is correct, increase the score
//  - If the answer is incorrect, decrease the time remaining
//  - Display feedback on whether the answer was correct or incorrect
//  - Display the next question
// 4. When all questions have been answered or the timer reaches 0:
//  - Stop the timer
//  - Hide the questions element and display the end screen element
//  - Display the final score
//  - Allow the user to enter their initials and submit their score
// 5. On the highscores page, display a list of previous high scores and allow the user to clear the high scores.
// 6. Store the high scores in local storage so that they persist even after the browser is closed.