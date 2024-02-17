function handleKeyboardButtonPress(event){
    // player pressed
    const playerPressed = event.key;

    // expected to press
    const CurrentAlphabetElement = document.getElementById('current-alphabet');
    const expectedAlphabet = CurrentAlphabetElement.innerText.toLowerCase();

    console.log(playerPressed, expectedAlphabet);

}

document.addEventListener('keyup', handleKeyboardButtonPress)
// halka keyboard chapachapi
function continueGame() {
    // generate a random alphabet
    const alphabet = getRandomAlphabet()
    console.log('random alphabet',alphabet);

    // set random alphabet on screen
    const CurrentAlphabetElement = document.getElementById('current-alphabet');
    CurrentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet)
}


function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}