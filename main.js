var game;

function startup(){
	game = new WarCardGame();

	game.playRound();
	game.playRound();
	game.playRound();
	game.playRound();
	game.playRound();

	console.log( `player 1 score: ${game.players[0].points} player 2 score: ${game.players[1].points}`);



}

startup();