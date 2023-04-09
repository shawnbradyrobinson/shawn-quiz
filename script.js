//Question-Answer Arrays
var ShawnOne = 
    ["Seafood is really just...",
    "Water Bugs", //CORRECT
    "Ocean Trash",
    "Alien Life",
     "Overrated because of butter"];

var JavaScriptTwo = 
   ["The most impressive Lupe Fiasco song is...",
    "Till I Get There", 
    "Mural", //CORRECT
    "Dumb it Down",
    "Words I Never Said"];

var JavaScriptThree = 
   ["Which of the following situations would make Shawn most uncomfortable?",
    "Everyone singing happy birthday to him at a restaurant", 
    "A crying person looking for consolation by hugging him",
    "A stranger trying to tickle him",
    "Being on the jumbotron at a sporting event"];//CORRECT

var JavaScriptFour =  
    ["Which of these sports icon is just the absolute worst?",
    "Tom Brady", 
    "Kevin Durant",
    "Ndamukong Suh",
    "Draymond Green",];//CORRECT

var JavaScriptFive = 
    ["You've made it this far, so let's get abstract -- Shawn's mind palace is...",
    "Cluttered with scraps of half-written papers", 
    "Matrix computer code scrolling down a screen",
    "White walls, clear glass, and sunlight", //CORRECT
    "A neon Tokyo nightscape"];
//querySelectors
var mainCard = document.querySelector(".card");
var displayedTimer = document.querySelector("#displayedTimer"); 
var displayedHighScore = document.querySelector("#displayedHighScore");
var displayedHighScoreName = document.querySelector("#highScoreName")
var displayedCurrentScore = document.querySelector("#displayedCurrentScore");
var displayedTimesAttempted = document.querySelector("#displayedTimesAttempted");
var startButton = document.querySelector("#startButton");
var displayedQuestion = document.querySelector("#displayedQuestion");
var displayedChoiceA = document.querySelector("#displayedChoiceA");
var displayedChoiceB = document.querySelector("#displayedChoiceB");
var displayedChoiceC = document.querySelector("#displayedChoiceC");
var displayedChoiceD = document.querySelector("#displayedChoiceD");
//Essential Variables 
var timeCount = 61; 
var clickCount = 0; 
var highScore = 0; 
var highScoreSaved = localStorage.getItem("highScore");
var userScore = 0; 
var highScoreName = "Your name here soon!"; 
var highScoreNameSaved = localStorage.getItem("highScoreName", highScoreName);
var timesAttempted = 0; 
var timesAttemptedSaved = localStorage.getItem("timesAttempted", timesAttempted);
//Sound Effects Variables
//Info on Sound Effects from: https://www.youtube.com/watch?v=eRTe4uaiSpc
var correctSound = document.createElement("audio");
var incorrectSound = document.createElement("audio");
//
var goodLuckSound = document.createElement("audio");
var doSound = document.createElement("audio");
var whySound = document.createElement("audio");
var yeahSound = document.createElement("audio");
var yupSound = document.createElement("audio");
goodLuckSound.src = "./sounds/good-luck.mp3";
doSound.src = "./sounds/do.mp3";
whySound.src = "./sounds/why.mp3";
yeahSound.src = "./sounds/yeah.mp3";
yupSound.src = "./sounds/yup.mp3";

correctSound.src = "./sounds/correct-sound.mp3";
incorrectSound.src = "./sounds/incorrect-sound.mp3";

//Initializing the dynamic displays
displayedTimer.innerHTML = "Timer: ";
displayedHighScore.innerHTML = "High Score: " +localStorage.getItem("highScore");
displayedCurrentScore.innerHTML = "Your Score: " +userScore; 
displayedHighScoreName.innerHTML = "Name: " +localStorage.getItem("highScoreName");
displayedTimesAttempted.innerHTML = "# of Attempts: " +localStorage.getItem("timesAttempted"); 



mainCard.addEventListener("click", function(event){
    var element = event.target; 
    //Make sure they are hitting the start button to begin...
    if(clickCount === 0){
        if (element.matches("#startButton") === false){
            clickCount = 0; 
            return; 
        }
    }
    //
    clickCount++; 

    //CLICK COUNT CYCLES

    if(clickCount === 1){
        //start up the program 
        startTimer();
        goodLuckSound.play();
        //display Question 1
        displayedQuestion.textContent = ShawnOne[0];
        displayedChoiceA.textContent = ShawnOne[1];
        displayedChoiceB.textContent = ShawnOne[2];
        displayedChoiceC.textContent = ShawnOne[3];
        displayedChoiceD.textContent = ShawnOne[4];

        timesAttemptedSaved++; 
        localStorage.setItem("timesAttempted", timesAttemptedSaved++);
        localStorage.getItem("timesAttempted");

    }
    if(clickCount === 2){
        //Was the last question correct?
        if(element.matches("#displayedChoiceA") === true){
            yeahSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            doSound.play();
            timeCount -= 10; 
        }
        //displayQuestion 2 
        displayedQuestion.textContent = JavaScriptTwo[0];
        displayedChoiceA.textContent = JavaScriptTwo[1];
        displayedChoiceB.textContent = JavaScriptTwo[2];
        displayedChoiceC.textContent = JavaScriptTwo[3];
        displayedChoiceD.textContent = JavaScriptTwo[4];
    
    }

    if(clickCount === 3){
        //Was the last question correct?
        if(element.matches("#displayedChoiceB") === true){
            yupSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            whySound.play();
            timeCount -= 10; 
        }

        
        displayedQuestion.textContent = JavaScriptThree[0];
        displayedChoiceA.textContent = JavaScriptThree[1];
        displayedChoiceB.textContent = JavaScriptThree[2];
        displayedChoiceC.textContent = JavaScriptThree[3];
        displayedChoiceD.textContent = JavaScriptThree[4];
    
    }
    
    if(clickCount === 4){
        //Was the last question correct?
        if(element.matches("#displayedChoiceD") === true){
            yeahSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            whySound.play();
            timeCount -= 10; 
        }
        
        displayedQuestion.textContent = JavaScriptFour[0];
        displayedChoiceA.textContent = JavaScriptFour[1];
        displayedChoiceB.textContent = JavaScriptFour[2];
        displayedChoiceC.textContent = JavaScriptFour[3];
        displayedChoiceD.textContent = JavaScriptFour[4];
    
    }

    if(clickCount === 5){
        //Was the last question correct?
        if(element.matches("#displayedChoiceD") === true){
            yupSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            doSound.play();
            timeCount -= 10; 
        }

        displayedQuestion.textContent = JavaScriptFive[0];
        displayedChoiceA.textContent = JavaScriptFive[1];
        displayedChoiceB.textContent = JavaScriptFive[2];
        displayedChoiceC.textContent = JavaScriptFive[3];
        displayedChoiceD.textContent = JavaScriptFive[4];
    
    }

    if(clickCount >= 6){
        console.log(clickCount);
        //Was the last question correct?
        if(element.matches("#displayedChoiceD") === true){
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore; 
        }
        console.log(clickCount);
        var finalScore = userScore + timeCount; 

        if(finalScore > localStorage.getItem("highScore")){
            highScore = finalScore; 
            localStorage.setItem("highScore", highScore);

            highScoreName = prompt("New high score! Write your name :) ", "name here");
            localStorage.setItem("highScoreName", highScoreName);
        }

        displayedCurrentScore.textContent = "Final Score: "+finalScore;
        displayedHighScore.textContent = "High Score: " +localStorage.getItem("highScore");
        displayedHighScoreName.textContent = "Name: " +localStorage.getItem("highScoreName");
        //END GAME STUFF 

        displayedQuestion.textContent = "You finished! Please refresh to play again!"
        displayedChoiceA.textContent = "";
        displayedChoiceB.textContent = "";
        displayedChoiceC.textContent = "";
        displayedChoiceD.textContent = "";

        if(timeCount > 0){
            timeCount = 0; 
           }
        
        if(clickCount > 9){
            return; 
        }

    }





})


function startTimer(){
    var timeInterval = setInterval(function(){
        timeCount--; 
        
        displayedTimer.textContent = "Timer: "+timeCount+ "  second(s) remaining"; 
        
        if(timeCount <= 0 || clickCount >= 6){
            clearInterval(timeInterval);
        displayedQuestion.textContent = "You finished!"
        displayedChoiceA.textContent = "";
        displayedChoiceB.textContent = "";
        displayedChoiceC.textContent = "";
        displayedChoiceD.textContent = "";
        clickCount = 7;  
        return; 

        }
    }, 1000);
}
