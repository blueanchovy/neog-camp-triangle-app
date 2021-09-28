const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const calculateButton = document.querySelector("#calculate-button");
const outputArea = document.querySelector("#output-text");

calculateArea = () => {
    let a = Number(firstSide.value);
    let b = Number(secondSide.value);
    let c = Number(thirdSide.value);
    let s = (a + b + c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(4);
    outputArea.innerText = "The area of the triangle using Heron's Formula is " + area;
};

calculateButton.addEventListener('click', () =>{
    calculateArea();
});