var buttonColour=['red','blue','green','yellow'];
var gamePattern=[];
var userClickedPattern=[];


var start=false
var level=0;

$(document).keypress(function () {
    if(start===false){
        
        nextSequence();
        start=true;
    } 
    
});

function startOver(){
    
    start=false;
    gamePattern=[];
    level=0;
    userClickedPattern=[];
}

function nextSequence(){

    level++;

    $("#level-title").text("Level "+level);
        


    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    // setTimeout(function(){
    //     userTurn();
    // },100);
    // userTurn();
   
}

function playSound(name) {
    var audio = new Audio(name + ".mp3");
    audio.play();
}

function animatePress(c){
    $("#"+c).addClass("pressed");
    setTimeout(function(){
        $("#"+c).removeClass("pressed")
    },100);
    
}

function wrong_ans(){
    var audio_wrong=new Audio("wrong.mp3");
    audio_wrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);

    $("#level-title").text("GameOver! Press Any Key To Restart");
    startOver();
}

$(".btn").click(function(){

    var clr=$(this).attr("id");
    userClickedPattern.push(clr);
    var audio=new Audio(clr+".mp3");
    audio.play();
    animatePress(clr);

    var n=userClickedPattern.length;
    if(userClickedPattern[n-1]!=gamePattern[n-1]){
        wrong_ans();
     
    }

    if(n==gamePattern.length){
        userClickedPattern=[];
        setTimeout(function(){
            nextSequence();
        },1000);
    }
    
});








