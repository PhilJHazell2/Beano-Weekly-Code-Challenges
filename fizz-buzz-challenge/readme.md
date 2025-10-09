# Challenge: FizzBuzz

## Instructions


Write a function called `fizzBuzz` that takes in a number and returns an array. 
The array should contain all the numbers from 1 to the number passed in. 
However: 
- If the number is divisible by 3, you should replace the number with "Fizz". 
- If the number is divisible by 5, you should replace the number with "Buzz". 
- If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".

### How to complete the challenge
- `npm install` to get Jest installed
- Add your solution to `challenge-code.js`
- Run the provided unit test. It should pass. `npm test`
- To run your function in the terminal and check the output, run `node index.js`

### Function Signature

```javascript
const fizzBuzz: any[] = ( num: number ) => {
	
}
```

### Example usage

```javascript
fizzBuzz( 15 );
// [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz' ]

```