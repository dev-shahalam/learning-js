// initializing some values
let totalAttempts = 5;
let attempt = 0;
let won = 0;
let lost = 0;

// finding elements
const form = document.querySelector("form");
const guessingNumber = document.querySelector("#input-number");
const result = document.querySelector("#result");
const check = document.querySelector("#btn");
const remaining = document.querySelector("#remaining");

const cardFooter = document.querySelector(".card-footer");
const lostWonMsg = document.createElement("p");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    attempt++;
    if (attempt === 5) {
        guessingNumber.disabled = true;
        check.disabled = true;
    }
    if (attempt < 6) {
        checkResult(guessingNumber.value);
        remaining.innerHTML = `Remaining attempts: ${totalAttempts - attempt}`;
    }
})

function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);

    if (guessingNumber == randomNumber) {
        result.innerHTML = `You have Won`;
        won++;
    }
    else {
        result.innerHTML = `You have lost. Random Number was : ${randomNumber}`;
        lost++;

    }

    lostWonMsg.innerHTML = `Won ${won} & Lost ${lost}`;
    cardFooter.appendChild(lostWonMsg);

}
function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}
