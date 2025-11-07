# Challenge: Dice Game

## Instructions
Write a function called `rollDice` that takes in a number of rolls, and for each roll returns the result of a simulated roll of two dice.  

If the simulated roll is a double (i.e 2 of the same number), return 'You win'. For everything else return 'You lose'.

Results should be returned as an array of objects formatted like this

```javascript
[
	{ dice_1: 6, dice_2: 2, total: 8, result: 'You lose' },
	{ dice_1: 3, dice_2: 3, total: 6, result: 'You win' },
]
```

### How to complete the challenge
- `npm install` to get Jest installed
- Add your solution to `challenge-code.js`
- Run the provided unit test. It should pass. `npm test`
- To run your function in the terminal and check the output, run `node index.js`

### Function Signature

```javascript
const rollDice: {
    dice_1: number,
    dice_2: number,
    total: number,
    result: string
}[] = ( numberOfRolls: number ) => {}
```

### Example usage

```javascript
    rollDice( 5 );
    /* [
           { dice_1: 6, dice_2: 2, total: 8, result: 'You lose' },
           { dice_1: 3, dice_2: 3, total: 6, result: 'You win' },
           { dice_1: 5, dice_2: 6, total: 9, result: 'You lose' },
           { dice_1: 1, dice_2: 1, total: 2, result: 'You win' },
           { dice_1: 3, dice_2: 6, total: 9, result: 'You lose' },
       ]   
    */
```