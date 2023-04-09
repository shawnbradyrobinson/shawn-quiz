//Question-Answer Arrays
var ShawnOne = 
    ["What keyword allows you to set a variable in Javascript?",
    "var", //CORRECT
    "make",
    "do",
     "if"];

var JavaScriptTwo = 
   ["What decade was Javascript invented?",
    "1980's", 
    "1990's", //CORRECT
    "2000's",
    "2010's"];

var JavaScriptThree = 
   ["which is NOT a loop name in Javascript?",
    "for", 
    "while",
    "do",
    "if"];//CORRECT

var JavaScriptFour =  
    ["What superset of Javascript allows you to work with objects in local storage?",
    "ECMA", 
    "Typescript",
    "W3",
    "JSON",];//CORRECT

var JavaScriptFive = 
    ["Which of the following terms is synonymous with 'Event Bubbling'?",
    "event listeners", 
     "event delegation",
    "event propogation", //CORRECT
    "event handling"];
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
            correctSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            incorrectSound.play();
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
            correctSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            incorrectSound.play();
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
            correctSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            incorrectSound.play();
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
            correctSound.play();
            userScore += 5;
            displayedCurrentScore.textContent = "Your Score: "+userScore;  
        }else{
            incorrectSound.play();
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
