const guess = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const alertMessage = document.querySelector(".message");
const hiddenNumber = document.querySelector (".number");
const score = document.querySelector (".score");
const body = document.querySelector ("body");
const tryAgain = document.querySelector (".again");
const liveHighScore = document.querySelector (".highscore");



let secretNumber = Math.trunc(Math.random() *20) + 1;
// hiddenNumber.innerHTML = secretNumber;

function displayMessage(message) {
    alertMessage.innerHTML = message;
}

let liveScore = 20;
let highScore = 0;

checkButton.addEventListener ("click", function() {
 Number(guess.value);
     
    if (!guess.value) {
        displayMessage ("Please enter a number");
    }
    //when player wins
     else if (guess.value == secretNumber) {
        displayMessage ("Bingo!! You have won");
        body.style.backgroundColor = "green";
        hiddenNumber.innerHTML = secretNumber;
     }
     if (liveScore > highScore) {
         highScore = liveScore;
         liveHighScore.innerHTML = highScore;
     }
     
     //when player loses
     if (liveScore < 1 ) {
         displayMessage  ("You lost!!");       
         body.style.backgroundColor = "red";

        }
     else if (guess.value >  secretNumber) {
        displayMessage  ("Too High!!");
        liveScore--;
        score.innerHTML = liveScore;
     }
     else if (guess.value <  secretNumber) {
        displayMessage   ("Too low!!");
        liveScore--;
        score.innerHTML = liveScore;
     }
    
})

tryAgain.addEventListener  ("click", function () {
    liveScore = 20;
    score.innerHTML = liveScore;
    secretNumber = Math.trunc(Math.random() *20) + 1;
    displayMessage  ("Start guessing...");
    body.style.backgroundColor = "#222";
    hiddenNumber.innerHTML = "?";
    guess.value = "";

})