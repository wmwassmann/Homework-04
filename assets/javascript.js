


var startButton = document.getElementById("startButton");
var timerScore = document.getElementById("timer");
var qPrompt = document.getElementById("heading-prompt");
var answersElement = document.getElementById("responses");
var scoreForm = document.getElementById("highscore");
var scoreElement = document.getElementById("scores");
var scoreRecord = document.getElementById("makeUL");
var userName = document.getElementById("userName");

var scoreButton = document.getElementById("scoreButton");
    scoreButton.addEventListener("click", scoreShow);
var back = document.getElementById("backButton");
    back.addEventListener("click", scoreHide);
var submit = document.getElementById("submitButton");
    submit.addEventListener("click", saveScore);
    startButton.addEventListener("click", startQuiz);

function scoreShow() {
    qPrompt.classList.add("hidden");
    answersElement.classList.add("hidden");
    startButton.classList.add("hidden");
    scoreElement.classList.remove("hidden");
    scoreElement.classList.add("scoreList");
    back.classList.remove("hidden");
    renderScores();

}

function scoreHide() {
    scoreElement.classList.add("hidden");
    back.classList.add("hidden");
    qPrompt.classList.remove("hidden");
    startButton.classList.remove("hidden");
}


// What the submit button will do, including saving scores to an object in local storage
function saveScore() {

    event.preventDefault();

    var temp = JSON.parse((localStorage.getItem("userData"))) || [];
    var userData = {
        Name: userName.value,
        Score: timerScore.textContent
    }

    temp.push(userData);
    localStorage.setItem("userData", JSON.stringify(temp));

    location.reload();

}

function renderScores() {
   
 
    var scoresToRender = JSON.parse((localStorage.getItem("userData")));

    for (var i = 0; i < scoresToRender.length; i++) {
   
    var ul = document.createElement("ul");
    ul.textContent = scoresToRender[i].Name + ":" + " " + scoresToRender[i].Score;
    scoreRecord.prepend(ul);
    }
}

var answer01 = document.getElementById("option01");
var answer02 = document.getElementById("option02");
var answer03 = document.getElementById("option03");
var answer04 = document.getElementById("option04");
var finalize;



function correctAnswer01() {
    answer01.classList.remove("incorrect");
    answer02.classList.remove("incorrect");
    answer03.classList.remove("incorrect");
    answer04.classList.remove("incorrect");

    let i = true; 

    if (i === true) {
        secondStone();
    }
}

function correctAnswer02() {
    answer01.classList.remove("incorrect");
    answer01.removeEventListener("click", correctAnswer01)
    answer02.classList.remove("incorrect");        
    answer03.classList.remove("incorrect");
    answer04.classList.remove("incorrect");

    let i = true; 

    if (i === true) {
        thirdStone();
    }
}

function correctAnswer03() {
    answer01.classList.remove("incorrect");
    answer02.classList.remove("incorrect");
    answer02.removeEventListener("click", correctAnswer02)
    answer03.classList.remove("incorrect");       
    answer04.classList.remove("incorrect");

    let i = true; 

    if (i === true) {
        fourthStone();
    }
}

function correctAnswer04() {
    answer01.classList.remove("incorrect");
    answer02.classList.remove("incorrect");
    answer02.removeEventListener("click", correctAnswer03)
    answer03.classList.remove("incorrect");
    answer04.classList.remove("incorrect");

    let i = true; 

    if (i === true) {
        fifthStone();
    }
}


function correctAnswer05() {
    answer01.classList.remove("incorrect");
    answer02.classList.remove("incorrect");
    answer03.classList.remove("incorrect");
    answer03.removeEventListener("click", correctAnswer04)
    answer04.classList.remove("incorrect");

    let i = true; 

    if (i === true) {
        sixthStone();
    }
}


function correctAnswer06() {
    finalize = true;

    answer01.classList.remove("incorrect");        
    answer02.classList.remove("incorrect");
    answer03.classList.remove("incorrect");
    answer03.removeEventListener("click", correctAnswer05)
    answer04.classList.remove("incorrect");

    let i = true; 
       
    if (i === true) {
        qPrompt.textContent=("You have collected all six Infinity Stones! Enter your name to log your time.");
        answersElement.classList.add("hidden");
        scoreForm.classList.remove("hidden");
    }
}


function firstStone() {
    qPrompt.textContent=("From which MCU faction did Thanos acquire the Power Stone?");
    answer01.textContent=("The Nova Corps") 
    answer02.textContent=("The Ravagers")
    answer03.textContent=("The Liberators") 
    answer04.textContent=("The Hand")
    
    answer01.addEventListener("click", correctAnswer01);
    answer02.addEventListener("click", wrongAnswer);
    answer03.addEventListener("click", wrongAnswer);
    answer04.addEventListener("click", wrongAnswer);

}

function secondStone() {
    qPrompt.textContent=("Which major MCU character willingly gave Thanos the Space Stone, or The Tesseract?");
    answer01.textContent=("General Ross") 
    answer02.textContent=("Loki") 
    answer03.textContent=("Doctor Horrible") 
    answer04.textContent=("Vision") 


    answer01.removeEventListener("click", correctAnswer01);
    answer02.removeEventListener("click", wrongAnswer);
    answer03.removeEventListener("click", wrongAnswer);
    answer04.removeEventListener("click", wrongAnswer);

    answer01.addEventListener("click", wrongAnswer);
    answer02.addEventListener("click", correctAnswer02);
    answer03.addEventListener("click", wrongAnswer);
    answer04.addEventListener("click", wrongAnswer);    
  
}

function thirdStone() {
    qPrompt.textContent=("The Reality Stone, or the Aether was last seen in the hands of which MCU antagonist?");
    answer01.textContent=("Malekith") 
    answer02.textContent=("The Collector") 
    answer03.textContent=("Dick Van Dyke") 
    answer04.textContent=("Hela") 

    answer01.removeEventListener("click", wrongAnswer);
    answer02.removeEventListener("click", correctAnswer02);
    answer03.removeEventListener("click", wrongAnswer);
    answer04.removeEventListener("click", wrongAnswer); 

    answer01.addEventListener("click", wrongAnswer);
    answer02.addEventListener("click", correctAnswer03);
    answer03.addEventListener("click", wrongAnswer);
    answer04.addEventListener("click", wrongAnswer);    
  
}

function fourthStone() {
    qPrompt.textContent=("What planet was the resting place of the Soul Stone, first introduce in Infinity War?");
    answer01.textContent=("Earth");
    answer02.textContent=("Hollywood");
    answer03.textContent=("Voramir");
    answer04.textContent=("Mar Sara");

    
    answer01.removeEventListener("click", wrongAnswer);
    answer02.removeEventListener("click", correctAnswer03);
    answer03.removeEventListener("click", wrongAnswer);
    answer04.removeEventListener("click", wrongAnswer);

    answer01.addEventListener("click", wrongAnswer);
    answer02.addEventListener("click", wrongAnswer);
    answer03.addEventListener("click", correctAnswer04);
    answer04.addEventListener("click", wrongAnswer);    
  
}

function fifthStone() {
    qPrompt.textContent=("Why did Doctor Strange willingly give up the Time Stone, arguable the most powerful infinity stone to the Mad Titan?");
    answer01.textContent=("Because he's a double agent");
    answer02.textContent=("As a bargaining chip for his own life");
    answer03.textContent=("He gave Thanos a fake stone.");
    answer04.textContent=("As a bargaining chip for Tony's life.");

    
    answer01.removeEventListener("click", wrongAnswer);
    answer02.removeEventListener("click", wrongAnswer);
    answer03.removeEventListener("click", correctAnswer04);
    answer04.removeEventListener("click", wrongAnswer);

    answer01.addEventListener("click", wrongAnswer);
    answer02.addEventListener("click", wrongAnswer);
    answer03.addEventListener("click", wrongAnswer);
    answer04.addEventListener("click", correctAnswer05);    
  
}

function sixthStone() {
    qPrompt.textContent=("Where was the Mind Stone when Thanos acquired it at the end of Infinity War?");
    answer01.textContent=("Inside of Vision's head");
    answer02.textContent=("In Loki's staff.");
    answer03.textContent=("Fused with Jane Foster."); 
    answer04.textContent=("In a special orb.");

   
    answer01.removeEventListener("click", wrongAnswer);
    answer02.removeEventListener("click", wrongAnswer);
    answer03.removeEventListener("click", wrongAnswer);
    answer04.removeEventListener("click", correctAnswer05);

    answer01.addEventListener("click", correctAnswer06);
    answer02.addEventListener("click", wrongAnswer);
    answer03.addEventListener("click", wrongAnswer);
    answer04.addEventListener("click", wrongAnswer);    
  
}

let timeLeft = 61;

function wrongAnswer() {
    this.classList.add("incorrect");
    timeLeft = timeLeft - 5;
}

// Starts the quiz
function startQuiz() {
    startButton.classList.add("hidden");
    qPrompt.textContent="";
    answersElement.classList.remove("hidden");

    firstStone();


    var goTime = setInterval(function() {
        timeLeft = timeLeft - 1;
        timerScore.textContent = "Time: " + timeLeft;
        
        if (timeLeft <= 0) {
            answerCorrect5();
            clearInterval(goTime);
        }

        if (finalize === true) {
            clearInterval(goTime);
        }

    },
    1000);
    

}