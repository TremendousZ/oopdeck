


class Deck{
	constructor(){
		this.cards = [];
	}

	/*
	purpose: take a card from the deck and return it for something else to use
	params: none
	returns: 1 card object
	*/
	dealCard(){
		var cardDealtIndex = Math.floor(Math.random()*this.cards.length);
		var cardDealt = this.cards[cardDealtIndex];
		return cardDealt;
	}
	/* 
	purpose: create a brand new card object in the deck with the given suite and value
	params: suite (string): the suite of the card, value (string): the value of the card
	returns: the current count of cards
	*/
	createCard( suite , value ){
		var card = new Card(suite,value);
	}
	/*
	purpose: randomize the cards in the deck
	params: none
	returns: none
	*/
	randomizeDeck(){
		debugger;
		for (var cardIndex = 0; cardIndex < this.cards.length; cardIndex++){
			var randomCardIndexPosition = Math.floor(Math.random() * this.cards.length);
			var cardToSwitch = this.cards[cardIndex];
			this.cards[cardIndex] = this.cards[randomCardIndexPosition];
			this.cards[randomCardIndexPosition] = cardToSwitch;
		}
	}
	/*
	purpose: take in a card object and add it to our deck
	params: 1 card object
	returns: the current count of cards
	*/
	addCard( card ){
		this.cards.push( card );
		return this.cards.length;
	}
	/*
	purpose: get an array of all the cards in the deck
	params: none
	returns: an array of cards
	*/
	getAllCards(){
		return this.cards;
	}
	/*
	purpose: empties the deck
	params: none
	returns: none
	*/
	removeAllCards(){
		this.cards = [];
	}
}
