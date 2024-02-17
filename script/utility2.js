
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}
// 
function getRandomAlphabet(){
    // create a alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get random index between 0- 25
    const randomNumber = Math.random()* 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}