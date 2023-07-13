const quiz = [
    {
      question: "Capital of india ?",
      options: ["Luvknow", "Srilanka", "None", "delhi"],
      answer: 3
    },
    {
      question: "capital of Uttar Pradesh ?",
      options: ["Lucknow", "varanasi", "Pakistan", "Kanpur"],
      answer: 0
    },
    {
      question: "Even number is",
      options: ["3", "6", "11", "01"],
      answer: 1
    },
    {
        question: "capital of Bihar",
        options: ["Patana", "gaya", "Allahabad", "Jaunpur"],
        answer: 0
      }
  ];
  
  // Initialize variables
  let currentQuestion = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  
  // Function to display quiz question and options
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    
    const currentQuiz = quiz[currentQuestion];
    
    questionElement.textContent = currentQuiz.question;
    
    optionsElement.innerHTML = "";
    for (let i = 0; i < currentQuiz.options.length; i++) {
      const option = document.createElement("button");
      option.textContent = currentQuiz.options[i];
      option.addEventListener("click", checkAnswer);
      optionsElement.appendChild(option);
    }
    
    document.getElementById("submit-btn").style.display = "none"; // Hide the submit button
  }
  
  // Function to check user's answer
  function checkAnswer(event) {
    const userAnswer = event.target.textContent;
    const currentQuiz = quiz[currentQuestion];
    
    if (userAnswer === currentQuiz.options[currentQuiz.answer]) {
      correctAnswers++;
      displayPopup("Correct!", "popup-correct");
    } else {
      incorrectAnswers++;
      displayPopup("Wrong!", "popup-wrong");
    }
    
    document.getElementById("submit-btn").style.display = "block"; // Show the submit button
  }
  
  // Function to display feedback popup
  function displayPopup(message, className) {
    const popupTextElement = document.getElementById("popup-text");
    const popupElement = document.getElementById("popup-container");
    
    popupTextElement.textContent = message;
    popupElement.classList.add(className);
    popupElement.style.display = "block";
    
    document.getElementById("submit-btn").disabled = true;
  }
  
  // Function to close feedback popup and proceed to next question
  function nextQuestion() {
    const popupElement = document.getElementById("popup-container");
    
    popupElement.style.display = "none";
    popupElement.classList.remove("popup-correct", "popup-wrong");
    
    currentQuestion++;
    
    if (currentQuestion < quiz.length) {
      displayQuestion();
    } else {
      displayLeaderboard();
    }
  }
  
  // Function to display leaderboard
  function displayLeaderboard() {
    const leaderboardElement = document.getElementById("leaderboard");
    
    const row = leaderboardElement.insertRow(-1);
    const nameCell = row.insertCell(0);
    const correctCell = row.insertCell(1);
    const incorrectCell = row.insertCell(2);
    
    nameCell.textContent = "User";
    correctCell.textContent = correctAnswers;
    incorrectCell.textContent = incorrectAnswers;
    
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("leaderboard-container").style.display = "block";
  }
  
  // Event listener for next button click
  document.getElementById("next-btn").addEventListener("click", nextQuestion);
  