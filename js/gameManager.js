var MODULE = (function (my,$) {
    "use strict";
    //cache all the dom elements of the boxes
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
        gameStarted:true, //initally the gameStarted is true
        gameEnded:false, //initially the gameEnded is false
        gameRunning:false, //initially the gameRunning is false
        //function that handles start screen and end screens
        currentScreen:function(){
            //When the game starts
            if(!this.gameEnded && this.gameStarted){
                my.gameUI.startPage(); //display the start page
                this.gameStarted=false;
                this.gameRunning=true;
            }
            //When the game ends
            if(!this.gameStarted && this.gameEnded){ 
                //if player1.win is true 
                if(my.player1.win){
                    my.gameUI.winner1Page();//display the winner page for player 1
                }
                //if player2.win is true 
                else if(my.player2.win){ 
                    my.gameUI.winner2Page(); //display the winner page for player2
                }
                else{
                    my.gameUI.tiePage(); // display the tie page
                }
                //after the game ends, set gameEnded and gameRunning equal to false
                this.gameEnded=false; 
                this.gameRunning=false;
            }
            //whenever the currentScreen function is called reset both player win variable to false
            my.player1.win=false; 
            my.player2.win=false;
        },
       
        game:function(){
            //playerturn goes to player1 at the start 
            my.board.playerturn("player1","player2");
            //check for changes on the boxes
            $('.boxes li').click(function(){
                
                //PLAYER1
                //VERTICAL COMBINATIONS
                if($one.hasClass("box-filled-1 clicked") && $four.hasClass("box-filled-1 clicked") && $seven.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                if($two.hasClass("box-filled-1 clicked") && $five.hasClass("box-filled-1 clicked") && $eight.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                if($three.hasClass("box-filled-1 clicked") && $six.hasClass("box-filled-1 clicked") && $nine.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                ///HORIZONTAL COMBINATIONS
                if($one.hasClass("box-filled-1 clicked") && $two.hasClass("box-filled-1 clicked") && $three.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                if($four.hasClass("box-filled-1 clicked") && $five.hasClass("box-filled-1 clicked") && $six.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                if($seven.hasClass("box-filled-1 clicked") && $eight.hasClass("box-filled-1 clicked") && $nine.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                //DIAGONAL COMBINATIONS
                if($one.hasClass("box-filled-1 clicked") && $five.hasClass("box-filled-1 clicked") && $nine.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                if($three.hasClass("box-filled-1 clicked") && $five.hasClass("box-filled-1 clicked") && $seven.hasClass("box-filled-1 clicked")){
                    my.gameManager.win("player1","player2");
                }
                
                
                
                //PLAYER2
                //VERTICAL COMBINATIONS
                if($one.hasClass("box-filled-2 clicked") && $four.hasClass("box-filled-2 clicked") && $seven.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                if($two.hasClass("box-filled-2 clicked") && $five.hasClass("box-filled-2 clicked") && $eight.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                if($three.hasClass("box-filled-2 clicked") && $six.hasClass("box-filled-2 clicked") && $nine.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                ///HORIZONTAL COMBINATIONS
                if($one.hasClass("box-filled-2 clicked") && $two.hasClass("box-filled-2 clicked") && $three.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                if($four.hasClass("box-filled-2 clicked") && $five.hasClass("box-filled-2 clicked") && $six.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                if($seven.hasClass("box-filled-2 clicked") && $eight.hasClass("box-filled-2 clicked") && $nine.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                //DIAGONAL COMBINATIONS
                if($one.hasClass("box-filled-2 clicked") && $five.hasClass("box-filled-2 clicked") && $nine.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                if($three.hasClass("box-filled-2 clicked") && $five.hasClass("box-filled-2 clicked") && $seven.hasClass("box-filled-2 clicked")){
                    my.gameManager.win("player2","player1");
                }
                
                //TIE
                //if the sum of the boxes clicked by player 1 and player 2 equals to 9 (total boxes) AND if no player has won yet then run the my.gameManager.tie() funciton to tie the game
                if($('.boxes li[class="box box-filled-1 clicked"]').length + $('.boxes li[class="box box-filled-2 clicked"]').length===9 && !my.player1.win && !my.player2.win){
                    my.gameManager.tie();
                }
                    
            });
            
            
        },
        // run this function when a player wins
        win:function(playerwin,playerlose){
            my.gameManager.gameStarted=false;
            my.gameManager.gameEnded=true;
            my[playerwin].win=true; 
            my[playerlose].win=false;
            my.board.reset(); //reset the board for the next game
            my.gameManager.currentScreen(); 
        },
        // run this function when no player wins and all boxes are clicked
        tie:function(){
            my.gameManager.gameStarted=false;
            my.gameManager.gameEnded=true;
            my.player1.win=false;
            my.player2.win=false;
            my.board.reset();
            my.gameManager.currentScreen();
        }
    };
    
    
	return my;
}(MODULE || {},jQuery));