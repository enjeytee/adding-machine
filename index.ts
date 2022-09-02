const button = document.querySelector(".button");
const firstInput = document.querySelector("#first-input") as HTMLInputElement;
const secondInput = document.querySelector("#second-input") as HTMLInputElement;
const screen = document.querySelector(".screen");
function addNumbers(a: number, b: number) {
    screen.innerHTML = (a + b).toString();
};
button.addEventListener("click", () => addNumbers(parseFloat(firstInput.value), parseFloat(secondInput.value)));

