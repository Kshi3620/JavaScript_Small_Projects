let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1


let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid nuumber")
    } else if(guess < 1 || guess > 100){
        console.log("Please enter a number between 1 to 100");
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You guess it right, Congrats");
        endGame();
    } else if(guess < randomNumber){
        displayMessage("Number is low");
    } else if(guess > randomNumber){
        displayMessage("Number is high");
    }
}

function displayGuess(guess){
    userinput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startover.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userinput.removeAttribute("disabled")
        startover.removeChild(p)
        playGame = true
    })
}

