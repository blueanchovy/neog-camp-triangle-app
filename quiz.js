const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-ans-btn");
const outputArea = document.querySelector("#output-text");

const rightAnswers = ["90°",
"right angled",
"one right angle",
"12,16,20",
"Equilateral Triangle",
"100°",
"30°",
"a+b+c",
"no",
"45°"];

calculateScore = () => {
    let score = 0;
    let index = 0;
    let val = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(Number(value.length) === 0){
            val+=1;
            if(val === 10){
                outputArea.innerText = "Please enter atleast one answer";
                break;
            }
        }
        if(value === rightAnswers[index]){
            score+=1;
        }
        index+=1;
    }
    outputArea.innerText = "Your score is " + score;
};

submitButton.addEventListener('click', () => {
    calculateScore();
});

