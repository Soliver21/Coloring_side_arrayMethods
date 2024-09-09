//A számokat tartalmazó négyzetek létrehozása.
/* let boxList = [];
const makeBoxes = () => {
    for (let i = 1; i < 16; i++) {
        boxList.push(`<div id="box${i}" class="box">${i}</div>`);
    }
    return boxList.join("");
} */

const makeBoxes = () => {
    const data = [
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5},
        {number: 6},
        {number: 7},
        {number: 8},
        {number: 9},
        {number: 10},
        {number: 11},
        {number: 12},
        {number: 13},
        {number: 14},
        {number: 15}
    ];
    const content = data.map(({number}) => `<div id="box${number}" class="box">${number}</div>`);
    return content.join("");
} 

//A számokat tartalmazó négyzetek megjelenítése a HTML-ben.
const renderBoxes = () => {
    const boxes = document.querySelector(".boxes");
    boxes.innerHTML = "";
    boxes.innerHTML = makeBoxes();
}

//Az oldal betöltésekor inicializálódik a weboldal.   
document.addEventListener("DOMContentLoaded", renderBoxes);

//Random szám generátor függvény
const randomNumber = () => {
    return Math.floor(Math.random() * 255);
}

//A megadott számú négyzet random színnel való színezése.
const colorBox = () => {
    const numberInput = document.getElementById("num").value;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        if (box.id === `box${numberInput}`) {
            box.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
        }
    });
}

//A színező gomb működtetése.
const coloringButton = document.getElementById("color");
coloringButton.addEventListener("click", colorBox);

//Alaphelyzetbe állító gomb működtetése.
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
    const numberInput = document.getElementById("num")
    numberInput.value = "";
});