var MODULE = (function (my,$) {
    "use strict";
	var player={
        turn:false, 
        win:false,
    };
    
    //creating two players PLAYER1 and PLAYER2
    my.player1=Object.create(player);
    my.player2=Object.create(player);
    
	return my;
}(MODULE || {},jQuery));




