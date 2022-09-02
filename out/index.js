"use strict";
const button = document.querySelector(".button");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const screen = document.querySelector(".screen");
function addNumbers(a, b) {
    screen.innerHTML = (a + b).toString();
}
;
button.addEventListener("click", () => addNumbers(parseFloat(firstInput.value), parseFloat(secondInput.value)));
//# sourceMappingURL=index.js.map