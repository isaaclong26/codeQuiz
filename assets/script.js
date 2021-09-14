

$(function(){
    setUp();

    

});


// questions 

var questions=["What is the file extension for a JavaScript file?", "Every line of JavaScript should end with...", 
"Loop critera should go inside....", "Common data types in js include"];
var answers= [[".jss", ".html",".css",".js"], [":",",",";","."],["{}", "()", "[]","' '"],
["string","pancake","ileterate","loop"] ];
var answerKey=[4,3,2,1]
var score = 0;
var i=0;
var scoreDict = {
    name: "",
    score: 0
};
function setUp(){
    $("#gameOver, .answer, #question").hide();
    
}

function startQuiz(){
    //hides start up menu and shows questions and answers
    $("#menu").hide();
    $(".answer, #question").fadeIn();
    // starts timer
    var timeLeft= 30;
    var timer= setInterval(countDown,1000);
    function countDown(){
        if(timeLeft == -1){
            clearTimeout(timer);
            gameOver();
        }
        else{
            $("#timer").text(" "+timeLeft);
            timeLeft--;
        }
    }
    i=0;
    score=0;
    printQAA();
    $(".answer").unbind("click");
    $(".answer").click(function(){
        var userAnswer = $(this).attr('id');
        var userAnswerInt= userAnswer.charAt(userAnswer.length-1);
        if(userAnswerInt==answerKey[i]){score=score+1};
       
        if(i==3){
            gameOver();
        }
        else{
            nextQuestion();
        }
    });

    function printQAA(){
        let question=i;
        let questionAnswers=answers[question];
        $("#question").text(questions[i]);
        for(let j=1; j<questionAnswers.length+1; j+=1){
            $("#answer"+j).text(questionAnswers[j-1]);
            
        }
    };

    function nextQuestion(){
        
        
        i+=1;
        printQAA();
    }
    
    function gameOver(){
        $(".answer, #question").fadeOut();
        $("#gameOver").fadeIn();
        $("#score").text(score);
        console.log(score);
    }

    
}

function playAgain(){
    
        setUp();
        startQuiz();
       
    }

    function takeNameAndScore(name){
        scoreDict.name=name;
        scoreDict.score=score;
        $("#high").text("Player: "+ scoreDict.name+ "   "+"Score: "+ scoreDict.score);

    }