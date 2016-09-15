"use strict";
var MODULE = (function (my,$) {
    //define the jquery svg image objects
    var $SvgO=$('<img src="img/o.svg" class="full-width">');
    var $SvgX=$('<img src="img/x.svg" class="full-width">');
    var Clicked=false;
    my.board={
        boxes:$('.boxes'),
        allClicked:false,
        totalScore:0,
        playerturn:function(playerin,playerout){
            if(playerin==="player1"){
                $('#player1').addClass("active");
                $('#player2').removeClass("active");
            }
            if(playerin==="player2"){
                $('#player1').removeClass("active");
                $('#player2').addClass("active");
            }
            my[playerout].turn=false
            my[playerin].turn=true;
        },
        hoverEvents:function(){
            $('.boxes li').hover(function(){//HOVER
                
                //if its player1's turn and the box was not clicked yet
                if(my.player1.turn && !my.player2.turn && !$(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2")){
                    $(this).addClass("box-filled-1");
                }
                //if its player's two turn and the box was not clicked yet
                else if(my.player2.turn && !my.player1.turn && !$(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2")){
                    $(this).addClass("box-filled-2");
                }
            }, function(){ //UNHOVER
                //if its player1's turn and the box was not clicked yet
                if(my.player1.turn && !my.player2.turn && $(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2")
                  && !$(this).hasClass("clicked")){
                    $(this).removeClass("box-filled-1");
                }//if its player's two turn and the box was not clicked yet
                else if(my.player2.turn && !my.player1.turn && !$(this).hasClass("box-filled-1") && $(this).hasClass("box-filled-2")
                       && !$(this).hasClass("clicked")){
                    $(this).removeClass("box-filled-2");
                }
            })
        },
        clickEvents:function(){
            $('.boxes li').click(function(){
                //In case all the boxes are clicked
                if(my.board.hasClass===8){
                    console.log("game over");
                    my.board.allClicked=true;
                }
                //if its player1's turn and the box was not clicked yet
                if(my.player1.turn && !my.player2.turn && $(this).hasClass("box-filled-1") && !$(this).hasClass("box-filled-2") 
                  &&!$(this).hasClass("clicked")){
                    $(this).addClass("box-filled-1");
                    $(this).addClass("clicked");
                    my.player1.turn=false;
                    my.player2.turn=true;
                    my.board.playerturn("player2","player1");
                    my.board.hasClass++;
                }
                //if its player's two turn and the box was not clicked yet
                else if(my.player2.turn && !my.player1.turn && !$(this).hasClass("box-filled-1") && $(this).hasClass("box-filled-2")
                        &&!$(this).hasClass("clicked")){
                    $(this).addClass("box-filled-2");
                    $(this).addClass("clicked");
                    my.player1.turn=true;
                    my.player2.turn=false;
                    my.board.playerturn("player1","player2");
                    my.board.hasClass++;
                }
            });
        },
        clickScore:function(){
            var power=0;
            $('.boxes li').each(function(){
               var score=Math.pow(2,power);
                $(this).on("click",function(){
                     my.board.totalScore=score;
                });
                power++;
            });
        },
        reset:function(){
            my.player1.score1=[];
            my.player2.score2=[];
            $('.boxes li').each(function(){
                $(this).removeClass();
                $(this).addClass("box");
            });
        }
        
    };
    
	return my;
}(MODULE || {},jQuery));