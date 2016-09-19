var MODULE = (function (my,$) {
    "use strict";
    my.board={
        // funciton that determines whose turn it is by adding an ACTIVE class to it
        playerturn:function(playerin,playerout){
            if(playerin==="player1"){
                $('#player1').addClass("active");
                $('#player2').removeClass("active");
            }
            if(playerin==="player2"){
                $('#player1').removeClass("active");
                $('#player2').addClass("active");
            }
            //after the turn changes set the turn boolean values accordingly
            my[playerout].turn=false;
            my[playerin].turn=true;
        },
        //HOVER and UNHOVER events
        hoverEvents:function(){
            // when players HOVER over the boxes their respective svg and background color is shown
            $('.boxes li').hover(function(){
                
                //if its player1's turn and the box was not clicked yet
                if(my.player1.turn && !my.player2.turn && !$(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2")){
                    $(this).addClass("box-filled-1");
                }
                //if its player's two turn and the box was not clicked yet
                else if(my.player2.turn && !my.player1.turn && !$(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2")){
                    $(this).addClass("box-filled-2");
                }
            }, 
                // when players UNHOVER over the boxes their respective svg and background color are hidden
                function(){ 
                //if its player1's turn and the box was not clicked yet
                if(my.player1.turn && !my.player2.turn && $(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2") && !$(this).hasClass("clicked")){
                    $(this).removeClass("box-filled-1");
                }//if its player's two turn and the box was not clicked yet
                else if(my.player2.turn && !my.player1.turn && !$(this).hasClass("box-filled-1") && $(this).hasClass("box-filled-2") && !$(this).hasClass("clicked")){
                    $(this).removeClass("box-filled-2");
                }
            });
        },
        //when the players click on the boxes
        clickEvents:function(){
            $('.boxes li').click(function(){
                
                //if its player1's turn and the box was not clicked yet
                if(my.player1.turn && !my.player2.turn && $(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2") && !$(this).hasClass("clicked")){
                    $(this).addClass("box-filled-1");
                    $(this).addClass("clicked");
                    my.player1.turn=false;
                    my.player2.turn=true;
                    //change turns
                    my.board.playerturn("player2","player1");
                }
                //if its player's two turn and the box was not clicked yet
                else if(my.player2.turn && !my.player1.turn && !$(this).hasClass("box-filled-1") && $(this).hasClass("box-filled-2") && !$(this).hasClass("clicked")){
                    $(this).addClass("box-filled-2");
                    $(this).addClass("clicked");
                    my.player1.turn=true;
                    my.player2.turn=false;
                    //change turns
                    my.board.playerturn("player1","player2");
                }
            });
        },
        //function that is resets the entire board. Its run after a game is finished
        reset:function(){
            //remove all classes from the boxes except the BOX class
            $('.boxes li').each(function(){
                $(this).removeClass();
                $(this).addClass("box");
            });
        }
        
    };
    
	return my;
}(MODULE || {},jQuery));