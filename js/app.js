let boxList = [];
const makeBoxes = () => {
    for (let i = 1; i < 16; i++) {
        boxList.push(`<div id="box${i}" class="box">${i}</div>`);
    }
    return boxList.join("");
}

const renderBoxes = () => {
    const boxes = document.querySelector(".boxes");
    boxes.innerHTML = "";
    boxes.innerHTML = makeBoxes();
}

document.addEventListener("DOMContentLoaded", renderBoxes);

const randomNumber = () => {
    return Math.floor(Math.random() * 255);
}

const colorBox = () => {
    const numberInput = document.getElementById("num").value;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        if (box.id === `box${numberInput}`) {
            box.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
        }
    });
}

const coloringButton = document.getElementById("color");
coloringButton.addEventListener("click", colorBox);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
    const numberInput = document.getElementById("num")
    numberInput.value = "";
});