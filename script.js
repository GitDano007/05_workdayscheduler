var timer = document.querySelector('.time');
var startTheReview = document.getElementById('startTimer');
var secondsLeft = 60;
var questionNumber = 1;
var stopTheTimer = 0;


function sendMessage() {
  timer.textContent = 'Code Quiz is Over! ';
}

    function setTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + ' Seconds left!';

        if(secondsLeft <=0) {
          clearInterval(timerInterval);
          sendMessage();
        }

            }, 1000);
    }
    startTheReview.addEventListener('click', function(){
    document.getElementById('q1').classList.remove('blank');
              setTime();
});



       var falseAnswer = document.querySelectorAll('.false');
       for (var i = 0; i < falseAnswer.length; i++){
        falseAnswer[i].addEventListener('click', function(){
        secondsLeft=secondsLeft-10;
        if(secondsLeft <=0){
            sendMessage();
        }
    });
}



var trueAnswer = document.querySelectorAll('.true');
for (var j = 0; j < trueAnswer.length; j++){
    trueAnswer[j].addEventListener('click', function(){
        var questId = 'q' + questionNumber;
        var questElement = document.getElementById(questId);
        questElement.classList.add('blank');
        if (questionNumber === 5) {
          document.getElementById(name);
        var formdiv = document.getElementById('name')
        formdiv.classList.remove('initial');
        stopTheTimer = secondsLeft;
        document.getElementById('score').textContent = 'Your score is: ' + stopTheTimer;
         }
        questionNumber++;
        var nextQuestId = 'q' + questionNumber;
        var nextQuestElement =document.getElementById(nextQuestId);
        nextQuestElement.classList.remove('blank');
        

});

}
