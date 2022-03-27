// Elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//When 'Start Quiz' is clicked, whos the Info Box
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

//When 'Exit Quiz' is clicked, hides Info Box
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

//When 'Continue' is clicked, proceeds to quiz
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
}

