function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackground(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-500");

}
function removeBackground(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-500");

}
// 
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    console.log(text);
    return text;
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0-25;
    const randomNumber = Math.round(Math.random() * 25);

    const alphabet = alphabets[randomNumber];
    return alphabet;
}