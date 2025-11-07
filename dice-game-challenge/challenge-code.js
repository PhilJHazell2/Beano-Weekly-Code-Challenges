const rollDice = ( numberOfRolls ) => {
	const results = [];
	let dice_1;
	let dice_2;
	let total;
	let result;

	for( let i = 0; i < numberOfRolls; i++ ) {
		dice_1 = generateIndividualDiceRoll();
		dice_2 = generateIndividualDiceRoll();
		total = dice_1 + dice_2;
		result = dice_1 === dice_2 ? 'You win' : 'You lose';
		results.push( { dice_1, dice_2, total, result } );
	}

	return results;
}

const generateIndividualDiceRoll = () => {
		return Math.floor( Math.random() * 6 ) + 1;
}

module.exports = rollDice;