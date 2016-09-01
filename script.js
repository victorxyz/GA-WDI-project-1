
var timerID = $("p#timerID");
var scoreVal = 0
var seconds = 30; //this defines the starting time for the timer
var second = 0; //if seconds = second, game ends;
var continue_game = true;
var pix = new Array("img/correct1.jpg", "img/incorrect.jpg", "img/correct2.jpg", "img/incorrect.jpg", "img/correct3.jpg", "img/incorrect.jpg", "img/incorrect.jpg", "img/correct1.jpg", "img/incorrect.jpg", "img/correct2.jpg", "img/correct1.jpg", "img/incorrect.jpg", "img/empty1.png", "img/empty2.png");
// $("p#leader").html($("#nameInput").text() + $("#score").val());



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
    if (continue_game) { $("#recentScores").append("<li>" + $('#score').text() + "</li>"); }
    continue_game = false;
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
        if (scoreVal <=4 && scoreVal >0) {
          document.getElementById("infImg").src = "img/inflat/inf2.png";
        }
        if (scoreVal <=4 && scoreVal >0) {
          document.getElementById("infImg").src = "img/inflat/inf2.png";
        }
        if (scoreVal <=4 && scoreVal >0) {
          document.getElementById("infImg").src = "img/inflat/inf2.png";
        }
        if (scoreVal <=4 && scoreVal >0) {
          document.getElementById("infImg").src = "img/inflat/inf2.png";
        }
        if (scoreVal <=4 && scoreVal >0) {
          document.getElementById("infImg").src = "img/inflat/inf2.png";
        }
        if (scoreVal <=6 && scoreVal >4) {
          document.getElementById("infImg").src = "img/inflat/inf3.png";
        }
        if (scoreVal <=8 && scoreVal >6) {
          document.getElementById("infImg").src = "img/inflat/inf4.png";
        }
        if (scoreVal <=10 && scoreVal >8) {
          document.getElementById("infImg").src = "img/inflat/inf5.png";
        }
        if (scoreVal <=12 && scoreVal >10) {
          document.getElementById("infImg").src = "img/inflat/inf6.png";
        }
        if (scoreVal <=14 && scoreVal >12) {
          document.getElementById("infImg").src = "img/inflat/inf7.png";
        }
        if (scoreVal <=16 && scoreVal >14) {
          document.getElementById("infImg").src = "img/inflat/inf8.png";
        }
        if (scoreVal <=18 && scoreVal >16) {
          document.getElementById("infImg").src = "img/inflat/inf9.png";
        }
        if (scoreVal <=20 && scoreVal >18) {
          document.getElementById("infImg").src = "img/inflat/inf10.png";
        }
        if (scoreVal <=22 && scoreVal >20) {
          document.getElementById("infImg").src = "img/inflat/inf11.png";
        }
        if (scoreVal <=24 && scoreVal >22) {
          document.getElementById("infImg").src = "img/inflat/inf12.png";
        }
        if (scoreVal <=26 && scoreVal >24) {
          document.getElementById("infImg").src = "img/inflat/inf13.png";
        }
        if (scoreVal <=28 && scoreVal >26) {
          document.getElementById("infImg").src = "img/inflat/inf14.png";
        }
        if (scoreVal <=30 && scoreVal >28) {
          document.getElementById("infImg").src = "img/inflat/inf15.png";
        }
        if (scoreVal <=32 && scoreVal >30) {
          document.getElementById("infImg").src = "img/inflat/inf16.png";
        }
        if (scoreVal <=34 && scoreVal >32) {
          document.getElementById("infImg").src = "img/inflat/inf17.png";
        }
        if (scoreVal <=36 && scoreVal >34) {
          document.getElementById("infImg").src = "img/inflat/inf18.png";
        }
        if (scoreVal <=38 && scoreVal >36) {
          document.getElementById("infImg").src = "img/inflat/inf19.png";
        }
        if (scoreVal <=40 && scoreVal >38) {
          document.getElementById("infImg").src = "img/inflat/inf20.png";
        }
        if (scoreVal <=42 && scoreVal >40) {
          document.getElementById("infImg").src = "img/inflat/inf21.png";
        }
        if (scoreVal <=44 && scoreVal >42) {
          document.getElementById("infImg").src = "img/inflat/inf22.png";
        }
        if (scoreVal <=46 && scoreVal >44) {
          document.getElementById("infImg").src = "img/inflat/inf23.png";
        }
        if (scoreVal <=48 && scoreVal >46) {
          document.getElementById("infImg").src = "img/inflat/inf24.png";
        }
        if (scoreVal <=50 && scoreVal >48) {
          document.getElementById("infImg").src = "img/inflat/inf25.png";
        }
        if (scoreVal <=52 && scoreVal >50) {
          document.getElementById("infImg").src = "img/inflat/inf26.png";
        }
        if (scoreVal <=54 && scoreVal >52) {
          document.getElementById("infImg").src = "img/inflat/inf27.png";
        }
        if (scoreVal <=56 && scoreVal >54) {
          document.getElementById("infImg").src = "img/inflat/inf28.png";
        }
        if (scoreVal <=58 && scoreVal >56) {
          document.getElementById("infImg").src = "img/inflat/inf29.png";
        }
        if (scoreVal <=60 && scoreVal >58) {
          document.getElementById("infImg").src = "img/inflat/inf30.png";
        }
        if (scoreVal <=62 && scoreVal >60) {
          document.getElementById("infImg").src = "img/inflat/inf31.png";
        }
        if (scoreVal <=64 && scoreVal >62) {
          document.getElementById("infImg").src = "img/inflat/inf32.png";
        }
        if (scoreVal <=66 && scoreVal >64) {
          document.getElementById("infImg").src = "img/inflat/inf33.png";
        }
        if (scoreVal <=68 && scoreVal >66) {
          document.getElementById("infImg").src = "img/inflat/inf34.png";
        }
        if (scoreVal <=70 && scoreVal >68) {
          document.getElementById("infImg").src = "img/inflat/inf35.png";
        }
        if (scoreVal <=72 && scoreVal >70) {
          document.getElementById("infImg").src = "img/inflat/inf36.png";
        }
        if (scoreVal <=76 && scoreVal >72) {
          document.getElementById("infImg").src = "img/inflat/inf37.png";
        }
        if (scoreVal <=80 && scoreVal >76) {
          document.getElementById("infImg").src = "img/inflat/inf38.png";
        }
        if (scoreVal <=82 && scoreVal >80) {
          document.getElementById("infImg").src = "img/inflat/inf39.png";
        }
        if (scoreVal <=86 && scoreVal >82) {
          document.getElementById("infImg").src = "img/inflat/inf40.png";
        }
        if (scoreVal <=90 && scoreVal >86) {
          document.getElementById("infImg").src = "img/inflat/inf41.png";
        }
        if (scoreVal <=94 && scoreVal >90) {
          document.getElementById("infImg").src = "img/inflat/inf42.png";
        }
        if (scoreVal <=98 && scoreVal >94) {
          document.getElementById("infImg").src = "img/inflat/inf43.png";
        }
        if (scoreVal <=102 && scoreVal >98) {
          document.getElementById("infImg").src = "img/inflat/inf44.png";
        }
        if (scoreVal <=106 && scoreVal >102) {
          document.getElementById("infImg").src = "img/inflat/inf45.png";
        }
        if (scoreVal >106 && scoreVal >106) {
          document.getElementById("infImg").src = "img/inflat/inf46.png";
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
      document.getElementById("infImg").src = "img/inflat/inf1.png";
      seconds = 30;
      second = 0;
      interval = setInterval(startTimer, 1000);
      scoreVal = 0;
      continue_game = true;
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
