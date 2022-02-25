var num = 0;
var time;
var timeText = document.querySelector("#timer");
var timeCount = document.querySelector(".timer_sec");
var heading = document.querySelector("#Go")
var testBox = document.querySelector( ".Test_box");
var questionEl= document.querySelector(".questions")
var optionEl = document.querySelector(".answers");
var body = document.querySelector(".master");

var alrtPos =new Audio("assets/sfx/correct.wav");
var alrtNeg =new Audio("assets/sfx/incorrect.wav");

var start_btn = document.querySelector("#start");
//  startTest /button clicked

function startTest(){
    //change layout
       heading.setAttribute("class","camo");
       start_btn.setAttribute("class","camo");
       testBox.setAttribute("class","page-content")
       
       setTimr();
       getQuestion();

}


function getQuestion(){
    questionEl.setAttribute("class","page-content");
    optionEl.setAttribute("class","page-content");
    optionEl.innerHTML ="";
    var q = question[num];
    questionEl.textContent = q.question;
    q.options.forEach(function(option, i) {
        var selection = document.createElement("button");
        selection.setAttribute("class", "option");
        selection.setAttribute("value", option);
        selection.textContent = i+ 1+ ". " + option;
        selection.onclick = checkAnswer;
        optionEl.appendChild(selection);
    });
}


function checkAnswer(){
    var q = question[num];
    if(this.value !== q.answer){
        time-=5;
        if(time < 0){
            time =0;
        }
        //sfx'wrong'
        alrtNeg.play();
    }else{
        //sfx'correct'
        alrtPos.play();
    }
    num++;
    console.log(num);
    if(num === question.length){

        //endtest
    }else {
        getQuestion();
    }

}
//time display
function setTimr(){
    timeText.removeAttribute("class");
    timeText.setAttribute("class","card")
    time = question.length * 5;
   // timeCount.innerHTML = time;
  /*  count = setInterval(timer, 1000);
    timeCount.textContent = time;
        time--;
        if(time > 0 ){
            timeCount.textContent = time;
        }
        if(time < 0){
            clearInterval(count);
            textTime.textContent = "times up"
        }*/
}


start_btn.onclick=startTest;








