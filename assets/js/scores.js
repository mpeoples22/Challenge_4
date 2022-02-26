function showScores(){
    //get scores from localstorage or set array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    //sort highscores
    highscores.sort(function(a,b){
        return b.score - a.score;
    });
    highscores.forEach(function(score) {
        //create li tags
      var tagEl = document.createElement("li");
      tagEl.textContent = score.initials + " - " + score.score;
      //display
      var olEl = document.querySelector("#highscores");
      olEl.appendChild(tagEl);
    });
}
function clearMemory(){
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
this.document.querySelector("#clear").onclick = clearMemory;
//runs when page loads
showScores();