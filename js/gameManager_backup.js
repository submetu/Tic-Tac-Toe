"use strict";
var MODULE = (function (my,$) {
    var wins =[7, 56, 448, 73, 146, 292, 273, 84];
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
            $('.boxes li').on("click",function(){
                     //if player1 just completed his turn, push the total score to the player1.score1     
                 if(my.player2.turn){my.player1.score1.push(my.board.totalScore);}
                //if player2 just completed his turn, push the total score to the player2.score2
                 if(my.player1.turn){my.player2.score2.push(my.board.totalScore);} 
                //if there is a repeating number in the player1.score array2, remove it
                 my.player1.score1 =  my.player1.score1.filter(function(elem, index, self) {
                                return index == self.indexOf(elem);
                            });
                //if there is a repeating number in the player2.score2 array, remove it
                 my.player2.score2 =  my.player2.score2.filter(function(elem, index, self) {
                                return index == self.indexOf(elem);
                            });
                //if an element of player2.score2 array exists in player1.score1 array, remove it
                for(var i=0;i<my.player2.score2.length;i++){
                    var index=my.player1.score1.indexOf(my.player2.score2[i]);
                    if(index>-1){
                         my.player1.score1.splice(index, 1);
                  }
                }  
                //if an element of player1.score1 array exists in player2.score2 array, remove it
                for(var i=0;i<my.player2.score2.length;i++){
                    var index=my.player1.score1.indexOf(my.player2.score2[i]);
                    if(index>-1){
                         my.player1.score1.splice(index, 1);
                  }
                }  
                
                   console.log(my.player1.score1);
                   console.log(my.player2.score2);
                //if any of the players have made more than or equal to 3 moves
                
                     if(my.player1.score1.length>=3 || my.player2.score2.length>=3){
                        //take the last three moves that each player had made and save it to thier respective variables
                        my.player1.score1=my.player1.score1.slice(Math.max(my.player1.score1.length - 3, 0));
                        my.player2.score2=my.player2.score2.slice(Math.max(my.player2.score2.length - 3, 0));

                        //take the sum of the last three moves that each player made and save them to their respective variables
                        if(my.player1.score1.length>1){var player1sum= my.player1.score1.reduce(function(a, b) { return a + b });}
                        if(my.player2.score2.length>1){var player2sum= my.player2.score2.reduce(function(a, b) { return a + b });}


                        //check if the player1sum exists in the win array
                       if(wins.indexOf(player1sum)>=0){
                           my.gameManager.gameStarted=false;
                           my.gameManager.gameEnded=true;
                           my.player1.win=true;
                           my.player2.win=false;
                           my.board.reset();
                           my.gameManager.currentScreen();
                           console.log("player 1 wins");
                       } 
                        //check if the player2sum exists in the win array
                       if(wins.indexOf(player2sum)>=0){
                           my.gameManager.gameStarted=false;
                           my.gameManager.gameEnded=true;
                           my.player1.win=false;
                           my.player2.win=true;
                           my.board.reset();
                           my.gameManager.currentScreen();
                           console.log("player 2 wins");
                        }
                    }
            });
            
        }
    };
    
    
	return my;
}(MODULE || {},jQuery));