const correctAnswers = {
    quiz1: "50",
    quiz2: "George Washington",
    quiz3: "1776"
  };
  
  window.onload = function() {
    document.getElementById("quiz1Content").innerHTML = `
      <h3>How many states are there in the USA?</h3>
      <ul>
        <li><input type="radio" name="quizOption1" value="30"> 30</li>
        <li><input type="radio" name="quizOption1" value="40"> 40</li>
        <li><input type="radio" name="quizOption1" value="50"> 50</li>
        <li><input type="radio" name="quizOption1" value="60"> 60</li>
      </ul>`;
    
    document.getElementById("quiz2Content").innerHTML = `
      <h3>Who was the first president?</h3>
      <ul>
        <li><input type="radio" name="quizOption2" value="George Washington"> George Washington</li>
        <li><input type="radio" name="quizOption2" value="Benjamin Franklin"> Benjamin Franklin</li>
        <li><input type="radio" name="quizOption2" value="Thomas Jefferson"> Thomas Jefferson</li>
        <li><input type="radio" name="quizOption2" value="Francis Scott Key"> Francis Scott Key</li>
      </ul>`;
    
    document.getElementById("quiz3Content").innerHTML = `
      <h3>When was the United States founded?</h3>
      <ul>
        <li><input type="radio" name="quizOption3" value="1667"> 1667</li>
        <li><input type="radio" name="quizOption3" value="2007"> 2007</li>
        <li><input type="radio" name="quizOption3" value="1956"> 1956</li>
        <li><input type="radio" name="quizOption3" value="1776"> 1776</li>
      </ul>`;
  };
  
  document.getElementById("quiz1SubmitBtn").addEventListener("click", function() {
    checkAnswer("quizOption1", "quiz1");
  });
  
  document.getElementById("quiz2SubmitBtn").addEventListener("click", function() {
    checkAnswer("quizOption2", "quiz2");
  });
  
  document.getElementById("quiz3SubmitBtn").addEventListener("click", function() {
    checkAnswer("quizOption3", "quiz3");
  });
  
  function checkAnswer(optionName, quizId) {
    const selectedOption = document.querySelector(`input[name="${optionName}"]:checked`);
    if (!selectedOption) {
      alert("Please select an option.");
      return;
    }
    
    const selectedAnswer = selectedOption.value;
    const correctAnswer = correctAnswers[quizId];
    if (selectedAnswer === correctAnswer) {
      document.getElementById("feedback").textContent = "Correct!";
    } else {
      document.getElementById("feedback").textContent = "Incorrect! The correct answer is: " + correctAnswer;
    }
  }
  