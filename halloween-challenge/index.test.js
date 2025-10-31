const ZombieFight = require( './challenge-code' );

global.console = { log: jest.fn() }

describe("ZombieFight Class", () => {

	test("Game outputs lose message when Player HP hits 0", () => {
		const game = new ZombieFight( 0, 100 );
		expect( game.startFight() ).toBe( 'You Lose! A zombie has eaten your brain!' );
	});

	test("Game outputs win message when Zombie HP hits 0", () => {
		const game = new ZombieFight( 100, 0 );
		expect( game.startFight() ).toBe( 'You Win! Take that you undead fool!' );
	});

	test("dealDamage reduces HP correctly", () => {
		const game = new ZombieFight( 100, 100 );
		const [ newHP, damage ] = game.dealDamage( 100 );
		expect( damage ).toBeGreaterThanOrEqual( 5 );
		expect( damage ).toBeLessThanOrEqual( 15 );
		expect( newHP ).toBe( 100 - damage );
	});

	test("currentTurn switches correctly", () => {
		const game = new ZombieFight( 100, 100 );
		expect( game.currentTurn ).toBe( 'player' );
		game.switchTurn();
		expect( game.currentTurn ).toBe( 'zombie' );
		game.switchTurn();
		expect( game.currentTurn ).toBe( 'player' );
	});

	test("generateRandomNumber produces numbers in range", () => {
		const game = new ZombieFight( 100, 100 );
		for ( let i = 0; i < 100; i++ ) {
			const num = game.generateRandomNumber( 5, 15 );
			expect( num ).toBeGreaterThanOrEqual( 5 );
			expect( num ).toBeLessThanOrEqual( 15 );
		}
	});

	test( "runCurrentPlayerAttack reduces HP of correct player", () => {
		const game = new ZombieFight( 100, 100 );

		// Player's turn
		game.runCurrentPlayerAttack();
		expect( game.zombieHP ).toBeLessThan( 100 );
		expect( game.playerHP ).toBe( 100 );

		// Zombie's turn
		game.runCurrentPlayerAttack();
		expect( game.playerHP ).toBeLessThan( 100 );
	});

	test("console.log should be called at least once", () => {
		const game = new ZombieFight( 100, 100 );
		game.startFight();

		expect( console.log ).toHaveBeenCalled();
	});
});