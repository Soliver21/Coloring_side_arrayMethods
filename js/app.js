// A számokat tartalmazó négyzetek létrehozása.
const makeBoxes = () => {
    const data = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 },
        { number: 8 },
        { number: 9 },
        { number: 10 },
        { number: 11 },
        { number: 12 },
        { number: 13 },
        { number: 14 },
        { number: 15 }
    ];
    const content = data.map(({ number }) => `<div id="box${number}" class="box">${number}</div>`);
    return content.join("");
}

// A számokat tartalmazó négyzetek megjelenítése a HTML-ben.
const renderBoxes = () => {
    const boxes = document.querySelector(".boxes");
    boxes.innerHTML = makeBoxes();
}

// Az oldal betöltésekor inicializálódik a weboldal.   
document.addEventListener("DOMContentLoaded", renderBoxes);

// Random szám generátor függvény
const randomNumber = () => {
    return Math.floor(Math.random() * 256);
}

// Input mező érték kiragadása
const getInputValue = () => {
    return document.getElementById("num").value;
}

// Megfelelő érték ellenőrzés
const checkValue = () => {
    const numberInput = getInputValue();
    if (!numberInput.trim()) {
        return [false, 0];
    }
    if (isNaN(numberInput)) {
        return [false, 0];
    }
    const currentValue = Number(numberInput);
    if (currentValue < 1 || currentValue > 15) {
        return [false, 0];
    }
    return [true, currentValue];
}
//
const sendErrorMessage = () => {
    return alert("Helytelen értéket adott meg!")
}
// A megadott számú négyzet random színnel való színezése.
const colorBox = () => {
    const [isValid, value] = checkValue();
    if (isValid) {
        const box = document.getElementById(`box${value}`);
        if (box) {
            box.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
        }
    }
    else{
        sendErrorMessage();
        return;
    }
}

// A színező gomb működtetése.
const coloringButton = document.getElementById("color");
coloringButton.addEventListener("click", colorBox);

// Alaphelyzetbe állító gomb működtetése.
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
    const numberInput = document.getElementById("num");
    numberInput.value = "";
});
