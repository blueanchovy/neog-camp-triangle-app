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
    let a = Number(firstSide.value);
    let b = Number(secondSide.value);
    let c = Number(thirdSide.value);
    if(Number(firstSide.value) === 0 || Number(secondSide.value) === 0 || Number(thirdSide.value) === 0){
        outputArea.innerText = "Please don't leave the inputs as blank or 0";
    }
    else if(Number(firstSide.value) < 0 || Number(secondSide.value) <0 || Number(thirdSide.value) <0){
        outputArea.innerText = "Please enter all angle values greater than 0";
    }
    else if(a + b <= c || b + c <= a ||a + c <= b){
        outputArea.innerText = "This is not a valid triangle as the sum of its two sides is not greater than its third side.";
    }
    else{   
        calculateArea();
    }
});