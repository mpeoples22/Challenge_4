var num = 0;
var time;
var timeText = document.querySelector("#timer");
var timeStat = document.querySelector(".timeStat");
var timeCount = document.querySelector(".timerSec");
var heading = document.querySelector("#Go")
var testBox = document.querySelector( ".Test_box");
var questionEl= document.querySelector(".questions")
var optionEl = document.querySelector(".answers");
var body = document.querySelector(".master");
var initialEl = document.querySelector("#initials");
var alrtPos =new Audio("assets/sfx/correct.wav");
var alrtNeg =new Audio("assets/sfx/incorrect.wav");
var submitBtn = document.querySelector("#submit");
var start_btn = document.querySelector("#start");
//  startTest /button clicked

function startTest(){
    //change layout
       heading.setAttribute("class","camo");
       start_btn.setAttribute("class","camo");
       testBox.setAttribute("class","page-content")
      // endTest();
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
   // console.log(num);
    if(num === question.length){
        time=3;
       endTest();
    }else {
        getQuestion();
    }

}
//time display
function setTimr(){
    timeText.removeAttribute("class");
    timeText.setAttribute("class","card")
    time = question.length * 5;
    timeCount.innerHTML = time;
   
    count = setInterval(function(){
      timeCount.textContent = time;
        time--;
        if(time > 0 ){
            timeCount.textContent = time;
        }
        if(time <= 0){
            clearInterval(count);
            timeStat.textContent = "Times Up!!"
            endTest();
        }
    } ,1000);
    
}

function endTest(){
    optionEl.setAttribute("id","slide");
    questionEl.setAttribute("class","camo");
    var endView = document.querySelector("#finish");
    endView.removeAttribute("class");
    var Stats = document.querySelector("#stats");
    Stats.innerHTML = num + " of " + question.length;
}
function saveScore(){
    
    var initLs = initialEl.value.trim();
    if(initLs!== ""){
        //call for localstorage content/set to array if empty
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
       //new score object
        var newHigh = {
            score: time,
            initials:initLs
        }
       //save to localstorage
        highscores.push(newHigh);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        //redirect to highscore html
        window.location.href = "highscores.html";
    }
       // document.querySelector("#initials").value =''
}
function checkEnter(event) {
    if(event.key==="Enter"){
        saveScore();
    }
}

start_btn.onclick=startTest;

submitBtn.onclick=saveScore;

//initialEl.onkeyup = checkEnter;








