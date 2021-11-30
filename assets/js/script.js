var timeText = document.querySelector(".timer .time_left_txt");
var timeCount = document.querySelector(".timer .timer_sec");
const welcomeBox = document.querySelector(".welcome");
const testBox = document.querySelector(".Test_box");
var body = document.querySelector(".master");
var start_btn = welcomeBox.querySelector(".start_btn button");
const noGo = document.querySelector(".Go");
// if startQuiz button clicked
start_btn.onclick = ()=>{
    body.classList.remove("noGo"); //hide info box

}


let d_count = 0;
let d_numb = 1;
let tVal = 10;
let usrCnt = 0;
let count = 0;
let cntLn = 0;
let wdthVl =0;


function queStns(index){
    const d_text = document.querySelector("d_text");
    let q_tag= '<span>' + question[index].numb + ". " + question[index].question +'<span>';
    let o_tag
}


function selectOption(answer){
    clearInterval(count);
    clearInterval(cntLn);
    let userSelc = answer.textContent;

}

function srtTimr(time){
    count = setInterval(timer, 1000);
    function time(){
        timeCount.textContent = time;
        time--;
        if(time <9){
            timeCount.textContent = "0"
        }
        if(time < 0){
            clearInterval(counter);
            textTime.textContent = "times up"
        }
    }
}











