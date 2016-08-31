
var timerID = $("p#timerID");
var scoreVal = 0
var seconds = 30; //this defines the starting time for the timer
var second = 0; //if seconds = second, game ends;
var pix = new Array("img/correct1.jpg", "img/incorrect.jpg", "img/correct2.jpg", "img/incorrect.jpg", "img/correct3.jpg", "img/incorrect.jpg", "img/incorrect.jpg", "img/correct1.jpg", "img/incorrect.jpg", "img/correct2.jpg", "img/correct1.jpg", "img/incorrect.jpg", "img/empty1.png", "img/empty2.png");




 box1interval = setInterval(function (){
   randomNum = Math.floor(Math.random() * pix.length);
  document.getElementById("box1Img").src = pix[randomNum];
}, ((Math.random()) + (Math.random())) * 1500);

 box2interval= setInterval(function(){
     randomNum = Math.floor(Math.random() * pix.length);
    document.getElementById("box2Img").src = pix[randomNum];
}, ((Math.random()) + (Math.random())) * 1500);

 box3interval = setInterval(function(){
     randomNum = Math.floor(Math.random() * pix.length);
    document.getElementById("box3Img").src = pix[randomNum];
  }, ((Math.random()) + (Math.random())) * 1500);

 box4interval = setInterval(function(){
     randomNum = Math.floor(Math.random() * pix.length);
    document.getElementById("box4Img").src = pix[randomNum];
  }, ((Math.random()) + (Math.random())) * 1500);

 box5interval = setInterval(function(){
     randomNum = Math.floor(Math.random() * pix.length);
    document.getElementById("box5Img").src = pix[randomNum];
  }, ((Math.random()) + (Math.random())) * 1500);

 box6interval = setInterval(function(){
     randomNum = Math.floor(Math.random() * pix.length);
    document.getElementById("box6Img").src = pix[randomNum];
  }, ((Math.random()) + (Math.random())) * 1500);

 box7interval = setInterval(function(){
     randomNum = Math.floor(Math.random() * pix.length);
    document.getElementById("box7Img").src = pix[randomNum];
  }, ((Math.random()) + (Math.random())) * 1500);

 box8interval = setInterval(function(){
     randomNum = Math.floor(Math.random() * pix.length);
    document.getElementById("box8Img").src = pix[randomNum];
  }, ((Math.random()) + (Math.random())) * 1500);

 box9interval = setInterval(function(){
     randomNum = Math.floor(Math.random() * pix.length);
    document.getElementById("box9Img").src = pix[randomNum];
  }, ((Math.random()) + (Math.random())) * 1500);


function startTimer() {
  value =(seconds - second);
  timerID.text(value);
  if (seconds <= second) {
    clearInterval(box1interval);
    clearInterval(box2interval);
    clearInterval(box3interval);
    clearInterval(box4interval);
    clearInterval(box5interval);
    clearInterval(box6interval);
    clearInterval(box7interval);
    clearInterval(box8interval);
    clearInterval(box9interval);
    return;
  }
  second++;
}

(function() {
    var correctImg1 = "img/correct1.jpg";
    var correctImg2 = "img/correct2.jpg";
    var correctImg3 = "img/correct3.jpg";
    var incorrectImg = "img/incorrect.jpg";
    $("img").click(function() {
      if (seconds <= second) {
        return;
      } else {
        var path = $(this).attr("src");
        if( correctImg1 == path) {
          scoreVal++;
          $("#score").text(scoreVal);
          console.log(scoreVal);
        } else if ( correctImg2 == path) {
          scoreVal += 2;
          $("#score").text(scoreVal);
          console.log(scoreVal);
        } else if ( correctImg3 == path) {
          scoreVal += 3;
          $("#score").text(scoreVal);
          console.log(scoreVal);
        } else if ( incorrectImg == path) {
          scoreVal -= 5;
          $("#score").text(scoreVal);
          console.log(scoreVal);
          }
        }
    });
})();

(function() {
    $("#resetButton").click(function() {
      clearInterval(interval);
      clearInterval(box1interval);
      clearInterval(box2interval);
      clearInterval(box3interval);
      clearInterval(box4interval);
      clearInterval(box5interval);
      clearInterval(box6interval);
      clearInterval(box7interval);
      clearInterval(box8interval);
      clearInterval(box9interval);
      seconds = 30;
      second = 0;
      interval = setInterval(startTimer, 1000);
      scoreVal = 0;
      $("#score").text(scoreVal);
      box1interval = setInterval(function(){
        randomNum = Math.floor(Math.random() * pix.length);
        document.getElementById("box1Img").src = pix[randomNum];
      }, ((Math.random()) + (Math.random())) * 1500);

      box2interval= setInterval(function(){
          randomNum = Math.floor(Math.random() * pix.length);
          document.getElementById("box2Img").src = pix[randomNum];
      }, ((Math.random()) + (Math.random())) * 1500);

      box3interval = setInterval(function(){
          randomNum = Math.floor(Math.random() * pix.length);
          document.getElementById("box3Img").src = pix[randomNum];
        }, ((Math.random()) + (Math.random())) * 1500);

      box4interval = setInterval(function(){
          randomNum = Math.floor(Math.random() * pix.length);
          document.getElementById("box4Img").src = pix[randomNum];
        }, ((Math.random()) + (Math.random())) * 1500);

      box5interval = setInterval(function(){
          randomNum = Math.floor(Math.random() * pix.length);
          document.getElementById("box5Img").src = pix[randomNum];
        }, ((Math.random()) + (Math.random())) * 1500);

      box6interval = setInterval(function(){
          randomNum = Math.floor(Math.random() * pix.length);
          document.getElementById("box6Img").src = pix[randomNum];
        }, ((Math.random()) + (Math.random())) * 1500);

      box7interval = setInterval(function(){
          randomNum = Math.floor(Math.random() * pix.length);
          document.getElementById("box7Img").src = pix[randomNum];
        }, ((Math.random()) + (Math.random())) * 1500);

      box8interval = setInterval(function(){
          randomNum = Math.floor(Math.random() * pix.length);
          document.getElementById("box8Img").src = pix[randomNum];
        }, ((Math.random()) + (Math.random())) * 1500);

      box9interval = setInterval(function(){
          randomNum = Math.floor(Math.random() * pix.length);
          document.getElementById("box9Img").src = pix[randomNum];
        }, ((Math.random()) + (Math.random())) * 1500);
    });
})();

var interval = setInterval(startTimer, 1000)
