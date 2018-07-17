

function startup(){
	var player = {
		name: 'Mark',
		deck: new Deck()
	}
	var dealer = {
		name: 'Ramone',
		deck: new Deck()
	}

	var suites = ['Heart', 'Diamond', 'Spade', 'Club'];
	var values = ['A',1,2,3,4,5,6,7,8,9,10,'J','Q','K'];

	for(var suiteIndex=0; suiteIndex< suites.length; suiteIndex++){
		for(var valuesIndex=0; valuesIndex<values.length; valuesIndex++){
			dealer.deck.createCard( suites[suiteIndex], values[valuesIndex]);
		}
	}

	dealer.deck.randomizeDeck();
	for(var cardCount=0; cardCount < 5; cardCount++){
		var newCard = dealer.deck.dealCard();
		player.deck.addCard( newCard );
	}
	var cards = player.deck.getAllCards();
	console.log( player.name + ' has ' , player.deck );

}