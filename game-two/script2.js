let  min = 1;
let max = 5;
let winningNumber = getRandomNum (min, max);
let guessLeft = 3 ;

const minNum = document.querySelector(".min");
const maxNum = document.querySelector(".max");
const submitBtn = document.querySelector(".submit");
const numberInput = document.querySelector("#number-input");
const message = document.querySelector (".message")
const crackerImage = document.querySelector(".cracker-image");
const tryAgainBtn = document.querySelector (".try-again");

minNum.textContent = min;
maxNum.textContent = max;

// function to get random number
function getRandomNum (min, max) {
    return (Math.floor(Math.random() * (max-min+1) + min))
    }



// click evert for submit button

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
let enteredValue = parseInt(numberInput.value);

if (isNaN(enteredValue) || enteredValue < min || enteredValue > max) {
    alertMessage(`Please enter number between ${min} and ${max}`, "red")

if  (winningNumber === enteredValue){
  numberInput.disabled = true;
    numberInput.style.color = "green";
    crackerImage.classList.remove ("hidden");
    alertMessage ("Correct Number, YOU WON!!!", "green")
    tryAgainBtn.classList.remove ("hidden");
    tryAgainBtn.innerHTML = "Play again";
    submitBtn.classList.add ("hidden")
    numberInput.style.border = "4px solid green";
}
}
else {
    guessLeft -= 1;
    if (guessLeft === 0) {
        alertMessage ("You lost", "red")
        numberInput.disabled = true;
       numberInput.style.color = "red";
       alertMessage (`Game over, You lost!! Winning number was ${winningNumber}`, "red")
       tryAgainBtn.classList.remove ("hidden");
       submitBtn.classList.add ("hidden")

    }
    else {
        alertMessage (`${enteredValue} is wrong, ${guessLeft} guesses left`, "red");
        numberInput.style.border = "4px solid red";
    }
    
}



console.log (guessLeft);

})


// function for alert message

function alertMessage (msg, color) {
    message.classList.remove("hidden");
    message.textContent = msg;
    message.style.color = color;
    
}

// function to reset game

tryAgainBtn.addEventListener ("click", function resetGame() {
//     numberInput.disabled = false;
//     numberInput.value = "";
//        crackerImage.classList.add ("hidden");
//    submitBtn.classList.remove ("hidden");
//     tryAgainBtn.classList.add ("hidden");
//     message.style.display = "none";
//     numberInput.style.border = "none";
    
window.location.reload();

})
