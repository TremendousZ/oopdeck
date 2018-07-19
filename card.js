

class Card{
	/*
	purpose: add the data to the Card
	params: suite (string), the suite of the card.  value (string), the value of the card (A, 1, 2, etc)
	returns: none
	*/
	constructor( suite , value){
		this.card = {
			suite: suite,
			value: value
		}
	}
	/*
	purpose: get the info for the card
	params: none
	return: an object literal with the suite and value
	*/
	getInfo(){
		return this.card;
	}
}