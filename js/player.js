"use strict";
var MODULE = (function (my,$) {
	var player={
        turn:false,
        win:false,
        score1:[],
        score2:[]
        
    };
    
    my.player1=Object.create(player);
    my.player2=Object.create(player);
    
	return my;
}(MODULE || {},jQuery));




