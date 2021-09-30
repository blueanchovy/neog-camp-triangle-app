const angle1 = document.querySelector("#angle-1");
const angle2 = document.querySelector("#angle-2");
const angle3 = document.querySelector("#angle-3");
const outputText = document.querySelector("#output-text")
const checkBtn = document.querySelector("#check-btn");

checkBtn.addEventListener("click", () => {
    console.log(Number(angle1.value), Number(angle2.value), Number(angle3.value));
    if(Number(angle1.value) === 0 || Number(angle2.value) === 0 || Number(angle3.value) === 0){
        outputText.innerText = "Please don't leave the angle inputs blank or 0";
    }
    else if(Number(angle1.value) < 0 || Number(angle2.value) <0 || Number(angle3.value) <0){
        outputText.innerText = "Please enter all angle values greater than 0";
    }
    else{
        if((Number(angle1.value) + Number(angle2.value) + Number(angle3.value)) === 180){
            outputText.innerText = "Is a Triangle!";
        }
        else{
            outputText.innerText = "Not a Triangle";
        }
    }
});
