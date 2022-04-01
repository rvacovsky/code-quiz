// Elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeUp = quiz_box.querySelector("header .time_text");

const option_list = document.querySelector(".option_list");
let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 75;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const quit_quiz = result_box.querySelector(".buttons .quit");
const score_btn = result_box.querySelector(".buttons .record");

//When 'Start Quiz' is clicked, show the Info Box
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

//When 'Exit Quiz' is clicked, hides Info Box
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

//When 'Continue' is clicked, proceeds to quiz
continue_btn.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer();
}

//If the Next Button is clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        next_btn.style.display = "none";
        timeUp.textContent = "Time Remaining";
    }else{
        console.log("Questions completed");
        showResultBox();
    }
}
// getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                        + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
        
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }   
}
// check mark and x mark
let checkIcon = '<div class="icon check"><i class="fa-solid fa-circle-check"></i></div>';
let xmarkIcon = '<div class="icon xmark"><i class="fa-solid fa-circle-xmark"></i></div>';

// Selecting Answers
function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", checkIcon);
    }else{
        answer.classList.add("incorrect");
        timeValue = timeValue - 5;
        console.log("Answer is Wrong");
        console.log('timeValue',timeValue )
        answer.insertAdjacentHTML("beforeend", xmarkIcon);
    }

    // once user selected disable all options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

// Quiz ends and Results Box pops up
function showResultBox() {
    quiz_box.classList.remove("activeQuiz"); // hides the Quiz Box
    result_box.classList.add("activeResult"); // shows the Results Box
}

// starts timer (that will become user score)
function startTimer(){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = timeValue;
        timeValue--;
        if(timeValue < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(timeValue < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeUp.textContent = "Time's Up!";

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", checkIcon);   
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";
        }
    }

}

// collects initials for high score page
const initials = prompt("Please enter your initials");
console.log(initials);

// // stores the initials and the time remaining as the user's score
function store(){
    

    const highScore = initials + " - " + timeValue;

    const highScoreItems = JSON.stringify(highScore);

    localStorage.setItem("highScore", highScoreItems);

    var highScoreRecord = document.querySelector(".highScore");
    highScoreRecord.innerHTML = highScore;

}

const str = localStorage.getItem("highScore");

const parsedObj = JSON.parse(str);

console.log(parsedObj);


function queCounter() {
    
};

score_btn.addEventListener("click", store);