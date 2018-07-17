


class WarCardGame{
	constructor(){
		this.dealer= new Deck();
		this.players = [
			{
				name: 'Mark',
				deck: new Deck(),
				points: 0
			},{
				name: 'Jacky',
				deck: new Deck(),
				points: 0
			}];
		this.cardData = {
			suites: null, //fill this with the available suites
			values: null //fill this with the available values
		}
		//create the dealer deck with all cards
		//randomize the dealer's deck
		//have the dealer deal out 26 cards to each player
	}
	/*
	purpose: fill a deck with 1 from each suite and value, or 52 cards
	params: the deck to fill, for example the dealer deck, or the players decks
	returns: none
	*/
	initializeDeck(){

	}
	/*
	purpose: take a card from one deck, and give it to another deck
	params:
		sourceDeck (Deck)(object): the deck to take cards from,
		destinationDeck (Deck)(object): the deck to give cards to
		cardCount (number): the count of cards to transfer between the decks
	returns: 
		none
	*/
	dealCardsBetweenPeople(){

	}
	/*
	purpose: take a card from each player and compare them.  award a point to the player who won, or no point if equal
	params: none
	results: none
	*/
	playRound(){

	}

}














