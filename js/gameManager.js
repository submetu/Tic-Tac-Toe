"use strict";
var MODULE = (function (my,$) {
    var wins =[7, 56, 448, 73, 146, 292, 273, 84];
    var $one=$('.boxes li').eq(0);
    var $two=$('.boxes li').eq(1);
    var $three=$('.boxes li').eq(2);
    var $four=$('.boxes li').eq(3);
    var $five=$('.boxes li').eq(4);
    var $six=$('.boxes li').eq(5);
    var $seven=$('.boxes li').eq(6);
    var $eight=$('.boxes li').eq(7);
    var $nine=$('.boxes li').eq(8);
    
    my.gameManager={
        gameStarted:true,
        gameEnded:false,
        gameRunning:false,
        //function that handles start screen and end screens
        currentScreen:function(){
            //When the game starts
            if(!this.gameEnded && this.gameStarted){
                my.gameUI.startPage();
                this.gameStarted=false;
                this.gameRunning=true;
            }
            //When the game ends
            if(!this.gameStarted && this.gameEnded){ 
                //if player1.win is true 
                if(my.player1.win){
                    my.gameUI.winner1Page();
                }
                //if player2.win is true 
                if(my.player2.win){
                    my.gameUI.winner2Page();
                }                            
                this.gameEnded=false;
                this.gameRunning=false;
            }
        },
       
        game:function(){
            //playerturn goes to player1 at the start 
            my.board.playerturn("player1","player2");
            //check for changes on the boxes
            $('.boxes li').click(function(){
                
                //PLAYER1
                //VERTICAL
                if($one.hasClass("box-filled-1 clicked") && $four.hasClass("box-filled-1 clicked") && $seven.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                if($two.hasClass("box-filled-1 clicked") && $five.hasClass("box-filled-1 clicked") && $eight.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                if($three.hasClass("box-filled-1 clicked") && $six.hasClass("box-filled-1 clicked") && $nine.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                ///HORIZONTAL
                if($one.hasClass("box-filled-1 clicked") && $two.hasClass("box-filled-1 clicked") && $three.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                if($four.hasClass("box-filled-1 clicked") && $five.hasClass("box-filled-1 clicked") && $six.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                if($seven.hasClass("box-filled-1 clicked") && $eight.hasClass("box-filled-1 clicked") && $nine.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                if($one.hasClass("box-filled-1 clicked") && $five.hasClass("box-filled-1 clicked") && $nine.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                if($three.hasClass("box-filled-1 clicked") && $five.hasClass("box-filled-1 clicked") && $seven.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                
                
                
                //PLAYER2
                //VERTICAL
                if($one.hasClass("box-filled-2 clicked") && $four.hasClass("box-filled-2 clicked") && $seven.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                if($two.hasClass("box-filled-2 clicked") && $five.hasClass("box-filled-2 clicked") && $eight.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                if($three.hasClass("box-filled-2 clicked") && $six.hasClass("box-filled-2 clicked") && $nine.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                ///HORIZONTAL
                if($one.hasClass("box-filled-2 clicked") && $two.hasClass("box-filled-2 clicked") && $three.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                if($four.hasClass("box-filled-2 clicked") && $five.hasClass("box-filled-2 clicked") && $six.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                if($seven.hasClass("box-filled-2 clicked") && $eight.hasClass("box-filled-2 clicked") && $nine.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                if($one.hasClass("box-filled-2 clicked") && $five.hasClass("box-filled-2 clicked") && $nine.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                if($three.hasClass("box-filled-2 clicked") && $five.hasClass("box-filled-2 clicked") && $seven.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                    
            });
            
            
        },
        win:function(playerwin,playerlose){
            my.gameManager.gameStarted=false;
            my.gameManager.gameEnded=true;
            my[playerwin].win=true;
            my[playerlose].win=false;
            my.board.reset();
            my.gameManager.currentScreen();
            console.log(playerwin+" wins");
        }
    };
    
    
	return my;
}(MODULE || {},jQuery));