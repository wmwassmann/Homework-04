# Homework-04
Quest for The Infinity Stones Quiz


// My plan of attack was simple.  Make arrays, call the arrays, and on the correct click, the next question would pop up. This took way longer than expected to figure out. 
// I can see that this probably wasn't necessary to have each button completely erase every other question, rather just log the scores and move on, kind of like one of those 
// facebook tests where you just scroll through the answers, but I wanted to try it this way, and I think I bit off more than I could chew? If not, then I need tutoring.

var questions = [
    "From which MCU faction did Thanos acquire the Power Stone?<br /> <br />", 
    "Which major MCU character willingly gave Thanos the Space Stone, or The Tesseract?<br /> <br />", 
    "The Reality Stone, or the Aether was last seen in the hands of which MCU antagonist?<br /> <br />", 
    "What planet was the resting place of the Soul Stone, first introduce in Infinity War?<br /> <br />",
    "Why did Doctor Strange willingly give up the Time Stone, arguable the most powerful infinity stone to the Mad Titan?<br /> <br />",
    "Where was the Mind Stone when Thanos acquired it at the end of Infinity War?<br /> <br />"
];

var answer01 = [
    "<button class=button02 onclick=correct01()>The Nova Corps</button>",
    "<button class=button02 onclick=incorrect02()>General Thunderbolt Ross</button>",
    "<button class=button02 onclick=incorrect03()>Malekith</button>",
    "<button class=button02 onclick=incorrect04()>Earth</button>",
    "<button class=button02 onclick=incorrect05()>Because he's a double agent</button>",
    "<button class=button02 onclick=incorrect06()>In a special orb</button>"
];

var answer02 = [
    "<button class=button02 onclick=incorrect01()>The Ravagers</button>",
    "<button class=button02 onclick=incorrect02()>Doctor Horrible</button>",
    "<button class=button02 onclick=correct03()>The Collector</button>",
    "<button class=button02 onclick=correct04()>Voramir</button>",
    "<button class=button02 onclick=incorrect05()>As a bargaining chip for his own life</button>",
    "<button class=button02 onclick=incorrect06()>Fused with Jane Foster</button>"

];

var answer03 = [
    "<button class=button02 onclick=incorrect01()>The Hand</button>",
    "<button class=button02 onclick=correct02()>Loki</button>",
    "<button class=button02 onclick=incorrect03()>Dick Van Dyke</button>",
    "<button class=button02 onclick=incorrect04()>Hollywood</button>",
    "<button class=button02 onclick=incorrect05()>He didn't actually give Thanos the real Time Stone, but a fake</button>",
    "<button class=button02 onclick=correct06()>Inside of Vision's head</button>"
];

var answer04 = [
    "<button class=button02 onclick=incorrect01()>The Liberators</button>",
    "<button class=button02 onclick=incorrect02()>Vision</button>",
    "<button class=button02 onclick=incorrect03()>Hela</button>",
    "<button class=button02 onclick=incorrect04()>Nowhere</button>",
    "<button class=button02 onclick=correct05()>As a bargaining chip for Tony Stark's life</button>",
    "<button class=button02 onclick=incorrect06()>In Loki's staff</button>"
];

var correct = ["Destiny still arrives...", "No more resurrections this time...", "Reality can be whatever I want...", "I'm sorry, Little One...", "One to go...", "I am...inevitable..."];
var incorrect = ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect", "incorrect"];

var qNum = 0;
qNum++;
var score = 0;
score++;

// I understand the general idea of how to remove time from a timer, I was just having loads of trouble getting it to actually work. 
// if the incorrect button was pressed (incorrect01, incorrect02, ect), I would make time -= 5; or something of the sort. I played with many different types of codes, none 
// worked.

function start01() {
    time = 30;    
    disappear01.innerHTML = "";
    message01.innerHTML = "";
    question.innerHTML = questions[0];
    option01.innerHTML = answer01[0];
    option02.innerHTML = answer02[0];
    option03.innerHTML = answer03[0];
    option04.innerHTML = answer04[0];
    number01.innerHTML = qNum++;    
}

function timer01() {
    time = time - 1;
    if (time < 30) {
        time01.innerHTML = time;
    }
    
    if (time === 0) {
        window.clearInterval(update);
        endgame01.innerHTML = "And I am Iron Man.";
        disappear01.innerHTML = "";
        message01.innerHTML = "";
        question.innerHTML = "";
        option01.innerHTML = "";
        option02.innerHTML = "";
        option03.innerHTML = "";
        option04.innerHTML = "";        
    } 

}

update = setInterval("timer01()", 1000);

// I never got around to making the answer.innerHTML look better, I'm still going to go back and do it, because I want this project to be a proud part of my portfolio.
// The intention was to make a gif (which I know how to do already) of Thanos gaining each infinity stone, and have them play when you answer correctly.
// one of the avengers would then punch him in the face if you answer incorrectly.  As you can see, this desire to be extra probably clouded my judgement on how to approach this // project.

function correct01() {
    endgame01.innerHTML = "";
    answer.innerHTML = "<div id=powerStoneC>" + correct[0] + "</div>";
    endgame01.innerHTML = "";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=next02()>Next</button>";
    score01.innerHTML = score++;
}

function incorrect01() {
    endgame01.innerHTML = "";
    answer01.innerHTML = "<div id=powerStoneI>" + incorrect[0] + "</div>";
    endgame01.innerHTML = "";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=next02()>Next</button>";

}
  
function next02() {
    endgame01.innerHTML = "";
    question.innerHTML = questions[1];
    option01.innerHTML = answer01[1];
    option02.innerHTML = answer02[1];
    option03.innerHTML = answer03[1];
    option04.innerHTML = answer04[1];
    answer.innerHTML = "";
    next01.innerHTML = "";    
    number01.innerHTML = qNum++;
}

function correct02() {
    endgame01.innerHTML = "";
    answer.innerHTML = "<div id=spaceStoneC>" + correct[1] + "</div>";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=next03()>Next</button>";
    score01.innerHTML = score++;
}

function incorrect02() {
    endgame01.innerHTML = "";
    answer.innerHTML = "<div id=powerStoneI>" + incorrect[1] + "</div>";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=next03()>Next</button>";
}

function next03() {
    endgame01.innerHTML = "";
    question.innerHTML = questions[2];
    option01.innerHTML = answer01[2];
    option02.innerHTML = answer02[2];
    option03.innerHTML = answer03[2];
    option04.innerHTML = answer04[2];
    answer.innerHTML = "";
    next01.innerHTML = "";    
    number01.innerHTML = qNum++;
}

function correct03() {
    endgame01.innerHTML = "";
    answer.innerHTML = "<div id=spaceStoneC>" + correct[2] + "</div>";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=next04()>Next</button>";
    score01.innerHTML = score++;
}

function incorrect03() {
    endgame01.innerHTML = "";
    answer.innerHTML = "<div id=powerStoneI>" + incorrect[2] + "</div>";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=next04()>Next</button>";
}

function next04() {
    endgame01.innerHTML = "";
    question.innerHTML = questions[3];
    option01.innerHTML = answer01[3];
    option02.innerHTML = answer02[3];
    option03.innerHTML = answer03[3];
    option04.innerHTML = answer04[3];
    answer.innerHTML = "";
    next01.innerHTML = "";    
    number01.innerHTML = qNum++;
}

function correct04() {
    endgame01.innerHTML = "";
    answer.innerHTML = "<div id=spaceStoneC>" + correct[3] + "</div>";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=next05()>Next</button>";
    score01.innerHTML = score++;
}

function incorrect04() {
    endgame01.innerHTML = "";
    answer.innerHTML = "<div id=powerStoneI>" + incorrect[3] + "</div>";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=next05()>Next</button>";
}

function next05() {
    endgame01.innerHTML = "";
    question.innerHTML = questions[4];
    option01.innerHTML = answer01[4];
    option02.innerHTML = answer02[4];
    option03.innerHTML = answer03[4];
    option04.innerHTML = answer04[4];
    answer.innerHTML = "";
    next01.innerHTML = "";    
    number01.innerHTML = qNum++;
}

function correct05() {
    endgame01.innerHTML = "";
    answer.innerHTML = "<div id=spaceStoneC>" + correct[4] + "</div>";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=next06()>Next</button>";
    score01.innerHTML = score++;
}

function incorrect05() {
    endgame01.innerHTML = "";
    answer.innerHTML = "<div id=powerStoneI>" + incorrect[4] + "</div>";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=next06()>Next</button>";
}

function next06() {
    endgame01.innerHTML = "";
    question.innerHTML = questions[5];
    option01.innerHTML = answer01[5];
    option02.innerHTML = answer02[5];
    option03.innerHTML = answer03[5];
    option04.innerHTML = answer04[5];
    answer.innerHTML = "";
    next01.innerHTML = "";    
    number01.innerHTML = qNum++;
}

function correct06() {
    endgame01.innerHTML = "";
    answer.innerHTML = "<div id=spaceStoneC>" + correct[5] + "</div>";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=finished()>*Fight Thor*</button>";
    score01.innerHTML = score++;
}

function incorrect06() {
    endgame01.innerHTML = "";
    answer.innerHTML = "<div id=powerStoneI>" + incorrect[5] + "</div>";
    option01.innerHTML = "";
    option02.innerHTML = "";
    option03.innerHTML = "";
    option04.innerHTML = "";
    next01.innerHTML = "<button class=button01 onclick=finished()>*Fight Iron Man*</button>";
}


// This was the middle of probably 3 or 4 different attempts to get a registrar going. I can more or less see what needs to be done - it's just something is'nt clicking here
// I'm not sure what it is.  I'm very stubborn, I don't like asking for help, but I think I need it now. 

var userName = document.querySelector("#username");
var submit = document.querySelector("submit");

renderLastRegistered();

function renderLastRegistered() {
    var userName = localStorage.getItem("username");
}

submit.addEventListener("click", function(event) {
    var userName = document.querySelector("#username").value; 

    localStorage.setItem("username", userName);
    renderLastRegistered();
});
