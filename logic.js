var timeleft = 75;
var currentQuestion = 0;
var score = 0;
var timerId

// 1 .On page load, hide the questions and end screen elements, and display the start screen element.
document.getElementById("questions").classList.add("hide"):
document.getElementById("end-screen").classList.add("hide"):
document.getElementById("start-screen").classList.add("hide"):

// 2. When the start button is clicked:
//  - Start the timer
document.getElementById("start").addEventListener("click", function() {
    // Start timer
    timerId = setInterval(function() {
      timeLeft--;
      document.getElementById("time").innerHTML = timeLeft;
      if (timeLeft === 0) {
        endQuiz();
      }
    }, 1000);
//  - Select a random set of questions from the allQuestions array
selectRandomQuestions();

//  - Hide the start screen element and display the questions element
//  - Display the first question and its choices
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