const homeCount = document.getElementById('homeID');
const guestCount = document.getElementById('guestID');

let homeScore = 0;
let guestScore = 0;

const addH1 = () => {
    homeScore++;
    homeCount.innerText = homeScore;
}
const addH2 = () => {
    homeScore+=2;
    homeCount.innerText = homeScore;
}
const addH3 = () => {
    homeScore+=3;
    homeCount.innerText = homeScore;
}

const addG1 = () => {
    guestScore++;
    guestCount.innerText = guestScore;
}
const addG2 = () => {
    guestScore+=2;
    guestCount.innerText = guestScore;
}
const addG3 = () => {
    guestScore+=3;
    guestCount.innerText = guestScore;
}

//I'm wondering if I can make the code shorte with some wrapper class
//Kinda possible, but I wan to learn something else as I feel this is trop easy