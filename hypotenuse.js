const baseValue = document.querySelector("#base-value");
const heightValue = document.querySelector("#height-value");
const calculateBtn = document.querySelector("#calculate-button");
const outputText = document.querySelector("#output-text");

calculateHypotenuse = () => {
    outputText.innerText = "Hypotenuse is " + Math.hypot(baseValue.value, heightValue.value);
};

calculateBtn.addEventListener('click', () => {
    calculateHypotenuse();
});