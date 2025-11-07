const rollDice = require( './challenge-code' );

describe("rollDice", () => {
	test("rollDice return the correct number of rolls", () => {
		const result = rollDice(10);
		expect(result.length).toEqual(10);
	});

	test("rollDice returns a correct total", () => {
		let result = rollDice(1);
		result = result[0];

		expect(result.total).toEqual(result.dice_1 + result.dice_2);
	});

	// FYI in the real world - we would mock Math.random here so we can control the output being tested. But for this challenge, we'll leave it like this.
	test("rollDice returns the correct result message", () => {
		let result = rollDice(1);
		result = result[0];

		if ( result.dice_1 === result.dice_2 ) {
			expect(result.result).toBe('You win')
		} else {
			expect(result.result).toBe('You lose')
		}
	});

	test("dice values should be between 1 and 6", () => {
		const result = rollDice(20);
		result.forEach(r => {
			expect(r.dice_1).toBeGreaterThanOrEqual(1);
			expect(r.dice_1).toBeLessThanOrEqual(6);
			expect(r.dice_2).toBeGreaterThanOrEqual(1);
			expect(r.dice_2).toBeLessThanOrEqual(6);
		});
	});

	test("each roll should have the correct properties", () => {
		const result = rollDice(3);
		result.forEach(r => {
			expect(r).toHaveProperty('dice_1');
			expect(r).toHaveProperty('dice_2');
			expect(r).toHaveProperty('total');
			expect(r).toHaveProperty('result');
		});
	});
});