"use strict";
MODULE.gameManager.currentScreen();
$('.screen-start a.button').on("click",function(){
    //change page to the Game Page
    MODULE.gameUI.gamePage();
    //start the hoverEvents
    MODULE.board.hoverEvents();
    //start the clickEvents
    MODULE.board.clickEvents();    
    
    //Start the game
    MODULE.gameManager.game();
})
$('#win-button').on("click",function(){
    MODULE.gameManager.gameStarted=true;
    MODULE.gameManager.currentScreen();
});