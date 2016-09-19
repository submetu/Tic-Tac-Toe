
var MODULE = (function (my,$) {
    "use strict";
    //Start page variables
    var $startDiv=$('<div class="screen screen-start"></div>');
    var $startHeader=$('<header></header>');
    var $startBtn=$('<a href="#" class="button">Start game</a>');
    var $startHeading=$('<h1>TIC TAC TOE</h1>');
    $startHeader.append($startHeading).append($startBtn);
    $startDiv.append($startHeader);
    $('body').append($startDiv);
    
    //Winnner Page variables
    var $winDiv=$('<div class="screen screen-win" id="finish"></div>');
    var $winHeader=$('<header></header>');
    var $winHeading=$('<h1>Tic Tac Toe</h1>');
    var $winPara=$('<p class="message"></p>');
    var $winButton=$('<a href="#" class="button" id="win-button">New game</a>');
    $winHeader.append($winHeading).append($winPara).append($winButton);
    $winDiv.append($winHeader);
    $('body').append($winDiv);
    
    
    
    //UI of the different pages
    my.gameUI={
        //page shown at the beginning of the game load
        startPage:function(){
            $('#board').hide();
            $startDiv.show();
            $winDiv.hide();
        },
        
        //page shown when player 1 wins
        winner1Page:function(){
            $('#board').hide();
            $startDiv.hide();
            $winDiv.removeClass("screen-win-two");
            $winDiv.removeClass("screen-win-tie");
            $winPara.text("WINNER");
            $winDiv.addClass("screen-win-one");
            $winDiv.show();
        },
        //page shown when player 2 wins
        winner2Page:function(){
            $('#board').hide();
            $startDiv.hide();
            $winDiv.removeClass("screen-win-one");
            $winDiv.removeClass("screen-win-tie");
            $winPara.text("WINNER");
            $winDiv.addClass("screen-win-two");
            $winDiv.show();
        },
        //page shown when the game is tied
        tiePage:function(){
            $('#board').hide();
            $startDiv.hide();
            $winDiv.removeClass("screen-win-one");
            $winDiv.removeClass("screen-win-two");
            $winPara.text("It's a draw");
            $winDiv.addClass("screen-win-tie");
            $winDiv.show();
            
        },
        // page shown when the game is running
        gamePage:function(){
            $startDiv.hide();
            $winDiv.hide();
            $('#board').show();
        }
        
    };
	return my;
}(MODULE || {},jQuery));