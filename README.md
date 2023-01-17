# API-Quiz-Challenge

### Code repository:
https://github.com/Jakinlade/API-Quiz-Challenge

### Deployed application:
https://jakinlade.github.io/API-Quiz-Challenge/

<br>

## Description
The Coding Quiz Challenge is a timed multiple-choice question game designed to test the player's knowledge and patience. The goal of the game is to answer 4 questions correctly as fast as possible, with 10 seconds being deducted for incorrect answers and the final score being the time remaining when the quiz ends.

To complete this challenge I had to create and array of multiple choice questions in a js file and added the extra feature of the quiz selecting 4 at random from a longer list, to create a more entertaining repeat experience.

I added an event listener to the the start quiz button, that started the timer and displayed the questions one after the other. I also displayed feedback of whether the answer was correct and incorrect, added SFX and displayed the correct answer if the incorrect was chosen.

I implemented a function that ends the quiz when the time reaches 0 or when the user answers the last question.

I added the functionality to submit high scores along with the player's initials using local storage, and display them on a separate high scores page.

Finally, I made sure that the scripts were correctly referenced in the HTML with the correct path, and also make sure the scripts logic and questions are loaded in the correct order.

<br>

## Screenshots
<br>

opening page:
![screenshot of website](../API-Quiz-Challenge/assets/Images/quiz.png)

<br>

Highscore page: 
![screenshot of website](../API-Quiz-Challenge/assets/Images/highscores.png)

<br>

## Code examples

upon clicking the "Start Quiz" button, an event listener is triggered, selecting questions at random. The timer begins and will end the quiz if it reaches 0 before all 4 questions are answered
```js
document.getElementById("start").addEventListener("click", function() {

selectRandomQuestions();
showQuestion();
    
    timerId = setInterval(function() {
      timeLeft--;
      document.getElementById("time").innerHTML = timeLeft;
      if ((timeLeft === 0) || (currentQuestionIndex === 4)) {
        endQuiz();
      }
    }, 1000);
```

I created an array of multiple choice questions. Some of which are intended purely to test the patience of the player and add some humor to the game.

```js
const allQuestions = [
    {
      question: "What do the 3 parts of the triforce represent in 'The legend of Zelda'?",
      choices: ["Honour, dignity & Wisdom", "Courage, Wisdom, Power", "Style, Grace & Power", "Cats, Dogs & Dolphins"],
      answer: "Courage, Wisdom, Power"
    },
    {
      question: "In 'Back to the future', What is the Delorian's special ability as a car",
      choices: ["X-ray vision", "Badass baking skills", "Time Travel", "Excell spreadsheet wiz"],
      answer: "Time Travel"
    },
    {
      question: "How many fingers am i holding up?",
      choices: ["none", "1", "12", "83"],
      answer: "1"
    }
```

I added an event listener to the clear highscores button, allowing the user to reset the submitted info.

```js
document.getElementById("clear").addEventListener("click", function() {
    localStorage.removeItem("highscores");
    location.reload();
})
```

## Technologies used

![JavaScript Badge](https://img.shields.io/badge/Language-JavaScript-yellow)
<br>
![HTML Badge](https://img.shields.io/badge/Language-HTML-red)
<br>
![CSS badge](https://img.shields.io/badge/Language-CSS-blue)