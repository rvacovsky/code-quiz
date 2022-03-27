// Elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

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
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0)
}

let que_count = 0

// getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].question +'</span>';
    que_text.innerHTML = que_tag;
}
