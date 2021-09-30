const baseValue = document.querySelector("#base-value");
const heightValue = document.querySelector("#height-value");
const calculateBtn = document.querySelector("#calculate-button");
const outputText = document.querySelector("#output-text");

calculateHypotenuse = () => {
    if(Number(baseValue.value) === 0 || Number(heightValue.value) === 0){
        outputText.innerText = "Please don't leave the base or height inputs blank or 0";
    }
    else if(Number(baseValue.value) < 0 || Number(heightValue.value) < 0){
        outputText.innerText = "Please enter all values greater than 0";
    }
    else{
        outputText.innerText = "Hypotenuse is " + Math.hypot(baseValue.value, heightValue.value);
    }
};

calculateBtn.addEventListener('click', () => {
    calculateHypotenuse();
});