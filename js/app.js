"use strict";

//In the beginning of the game, run the currentScreen function
MODULE.gameManager.currentScreen();

//When the Start Game button is clicked
$('.screen-start a.button').on("click",function(){
    //change page to the Game Page
    MODULE.gameUI.gamePage();
    //start the hoverEvents
    MODULE.board.hoverEvents();
    //start the clickEvents
    MODULE.board.clickEvents();    
    //Start the game
    MODULE.gameManager.game();
});

//After the game is finished, upon clickin the NEW GAME button
$('#win-button').on("click",function(){
    MODULE.gameManager.gameStarted=true;
    MODULE.gameManager.currentScreen();
});