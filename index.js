const clickButton = document.querySelector("#clickHere");
let rightAnswer = document.querySelector("#correct");
let wrongAnswer = document.querySelector("#wrong");

let rightAnswerCount = 0;
let wrongAnswerCount = 0;

//FUNCTIONS
function results() {
  setTimeout(function() {
    if (rightAnswerCount + wrongAnswerCount == 3) {
      alert(`You guessed ${rightAnswerCount} correctly out of 3`);
      rightAnswerCount = 0;
      wrongAnswerCount = 0;
      rightAnswer.innerHTML = `Correct : 0`;
      wrongAnswer.innerHTML = `Wrong : 0`;
    }
  }, 0);
}

function guessTest() {
  while (rightAnswerCount + wrongAnswerCount < 3) {
    let userGuess = prompt("Guess a number from 1-10");
    userGuess = parseInt(userGuess);

    let randomNumber = Math.round(Math.random() * 10);
    console.log(randomNumber);

    if (userGuess < 0 || userGuess > 10 || isNaN(userGuess)) {
      alert("Buddy, a NUMBER from 1-10");
      return;
    } else {
      if (userGuess == randomNumber) {
        rightAnswerCount++;
        rightAnswer.innerHTML = `Correct : ${rightAnswerCount}`;
        alert(`Genius! Yh, the number is ${randomNumber}`);

        results();
      } else {
        wrongAnswerCount++;
        wrongAnswer.innerHTML = `Wrong : ${wrongAnswerCount}`;
        alert(
          `Lol. Sorry you are not as badass as you think you are. The number is ${randomNumber} Try again`
        );

        results();
      }
    }
  }
}

clickButton.onclick = guessTest;
