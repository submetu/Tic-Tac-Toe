"use strict";
var MODULE = (function (my,$) {
    //Start page variables
    var $startDiv=$('<div class="screen screen-start"></div>');
    var $startHeader=$('<header></header>');
    var $startBtn=$('<a href="#" class="button">Start game</a>');
    var $startHeading=$('<h1>TIC TAC TOE</h1>');
    $startHeader.append($startHeading).append($startBtn)
    $startDiv.append($startHeader);
    $('body').append($startDiv);
    
    //Winnner Page variables
    var $winDiv=$('<div class="screen screen-win" id="finish"></div>');
    var $winHeader=$('<header></header>');
    var $winHeading=$('<h1>Tic Tac Toe</h1>');
    var $winPara=$('<p class="message">WINNER</p>');
    var $winButton=$('<a href="#" class="button" id="win-button">New game</a>');
    $winHeader.append($winHeading).append($winPara).append($winButton);
    $winDiv.append($winHeader);
    $('body').append($winDiv);

    //Winner1Page variables
    
    //UI of the different pages
    my.gameUI={
        startPage:function(){
            $('#board').hide();
            $startDiv.show();
            $winDiv.hide();
        },
        winner1Page:function(){
            $('#board').hide();
            $startDiv.hide();
            $winDiv.removeClass("screen-win-two");
            $winDiv.addClass("screen-win-one");
            $winDiv.show();
        },
        winner2Page:function(){
            $('#board').hide();
            $startDiv.hide();
            $winDiv.removeClass("screen-win-one");
            $winDiv.addClass("screen-win-two");
            $winDiv.show();
        },
        gamePage:function(){
            $startDiv.hide();
            $winDiv.hide();
            $('#board').show();
        }
        
    }
	return my;
}(MODULE || {},jQuery));