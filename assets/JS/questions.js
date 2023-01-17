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
    },
    {
      question: "What is the keyword used to create a function in JavaScript?",
      choices: ["function", "method", "procedure", "I choose you!!"],
      answer: "function"
    },
    {
      question: "How do you like your eggs in the morning?",
      choices: ["boiled", "fried", "unfertilized", "poached"],
      answer: "poached"
    },
    {
      question: "What is 5 x 7?",
      choices: ["53", "35", "bacon", "pi"],
      answer: "35"
    },
    {
      question: "What is Ash Ketchum's fav poke'mon",
      choices: ["Himself", "Pikachu", "Charizard", "Mewtwo"],
      answer: "Himself"
    },
    {
      question: "What is the name of the main protagonist in the game 'Final Fantasy 7'?",
      choices: ["Cloud Strife", "Tidus", "Squall Leonhart", "Zidane Tribal"],
      answer: "Cloud Strife"
    },
    {
      question: "What is the name of Mario's brother?",
      choices: ["Luigi", "Wario", "Peach", "Toad"],
      answer: "Luigi"
    },
    {
      question: "What did the 0 say to the 8?",
      choices: ["Nice belt!", "Hey, you're looking a little hollow, are you okay?", "You're looking a little round, what's the matter?", "Nice number, bro!"],
      answer: "Nice belt!"
    },
    {
      question: "Why did the computer go to the doctor?",
      choices: ["It had a virus!", "It had a broken mouse!", "It had a bad case of the pixels!", "Computers don't go to the doctor, they have IT support"],
      answer: "It had a virus!"
    }

  ];
  
  // Select a random set of questions from the allQuestions array
  function selectRandomQuestions() {
    questions = [];
    while (questions.length < 4) {
      randomIndex = Math.floor(Math.random() * allQuestions.length);
      if (!questions.includes(allQuestions[randomIndex])) {
        questions.push(allQuestions[randomIndex]);
      }
    }
  }