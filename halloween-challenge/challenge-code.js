class ZombieFight {
	constructor( playerHP, zombieHP ) {
		this.playerHP = playerHP;
		this.zombieHP = zombieHP;
		this.currentTurn = 'player';
	}

	startFight() {
		while ( this.playerHP > 0 && this.zombieHP > 0 ) {
			this.runCurrentPlayerAttack();
		}
		return this.outcome();
	}

	outcome() {
		if ( this.playerHP <= 0 ) {
			return "You Lose! A zombie has eaten your brain!";
		} else if ( this.zombieHP <= 0 ) {
			return "You Win! Take that you undead fool!";
		}
	}

	runCurrentPlayerAttack() {
		let damage;
		if ( this.currentTurn === 'player' ) {
			[ this.zombieHP, damage ] = this.dealDamage( this.zombieHP );
			console.log( `You deal ${damage} damage. Zombie HP: ${this.zombieHP}` );
			
		} else {
			[ this.playerHP, damage ] = this.dealDamage( this.playerHP );
			console.log( `Zombie deals ${damage} damage. Your HP: ${this.playerHP}` );
		}
		this.switchTurn();
	}

	switchTurn() {
		this.currentTurn = this.currentTurn === 'player' ? 'zombie' : 'player';
	}

	dealDamage( hpToDamage ) {
		const damage = this.generateRandomNumber( 5, 15 );
		// Using Math.max to ensure HP doesn't go below 0
		return [ Math.max( hpToDamage - damage, 0 ), damage ];
	}

	generateRandomNumber( min, max ) {
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	}
}

module.exports = ZombieFight;