//  function play() {
//     /**
//      * step 1: first hide the home screen using hidden tag
//      */
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
    
//     // show the playground section
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
//  }


function handleKeyUpEvent(event) {
    const playerPressed = event.key;

    // stop the game if pressed Escape
    if(playerPressed === 'Escape'){
        gameOver();
    }
    // console.log('player pressed', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)
        // update score
        // // get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;
        // new round 
        removeBackground(expectedAlphabet);
        continueGame();
    }else{
        const currentScore = getTextElementValueById('current-life');
        const updatedScore = currentScore - 1;
        setTextElementValueById('current-life', updatedScore)
        // console.log('you lost a life');
        // // step 1 get the current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // reduce the life count
        // const newLife = currentLife - 1;

        // // display the updated life count
        // currentLifeElement.innerText = newLife;
        if(updatedScore === 0){
            gameOver()
        }

    }
}

document.addEventListener('keyup', handleKeyUpEvent);



function continueGame() {
    // step 1:generate a random number
    const alphabet = getRandomAlphabet();
    console.log("Your random number :",alphabet);
    // set a random alphabet 
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set bg-color
    // setBackground(alphabet);
    setBackground(alphabet)
}

function play() {
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')
    // reset score and life
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continueGame()
}

function gameOver() {
    hideElementById('play-ground')
    showElementById('final-score')
    // update final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last key bg
    const currentAlphabet = getElementTextById('current-alphabet');

    removeBackground(currentAlphabet);
}