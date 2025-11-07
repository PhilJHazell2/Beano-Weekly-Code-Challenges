# Challenge: Halloween Turn Based Zombie Game

## Instructions

A very scary zombie hoarde is chasing you. I guess there is no choice but to fight them off one-by-one. If only there was a Javascript class for that....   

Write a Javascript class that simulates a turn-based fight with a zombie. Your class should be configurable with your Health Points and the zombie's Health Points and should output the results of each turn in the console before outputting the final result as a string. The amount of damage dealt per attack should be completely random. 

Your class should include a method called `startFight` which runs the functionality and returns the end result as a string saying either `You Win! Take that you undead fool!` or `You Lose! A zombie has eaten your brain!`

If you want to develop this further - think about adding different attacks that cause different amounts of damage and adding more unit tests for any additional methods you create.

### Hint
Math.Random() will be useful here

### How to complete the challenge
- `npm install` to get Jest installed
- Add your solution to `challenge-code.js`
- Run the provided unit test. It should pass. `npm test`
- To run your function in the terminal and check the output, run `node index.js`

### Class Signature

```javascript
class ZombieFight {
    constructor( playerHP: number, zombieHP: number ) {
		
    }
    
    startFight(): string {
		
    }
}
```

### Example usage

```javascript
    const game = new ZombieFight( 100, 100 );
    game.startFight();
    // [console] You deal 56 damage. Zombie HP: 44
    // [console] Zombie deals 74 damage. Your HP: 26
    // [console] You deal 29 damage. Zombie HP: 15
    // [console] Zombie deals 70 damage. Your HP: 0
    // You Lose! A zombie has eaten your brain!

```