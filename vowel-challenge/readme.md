# Challenge: Count Vowels

## Instructions
Write a function called countVowels which counts the number of vowels that occur in a sentence and re
turns an object of results.  
The function should be case-insensitive so 'E' and 'e' should both be counted as an instance of 'e'.

### How to complete the challenge
- `npm install` to get Jest installed
- Add your solution to `challenge-code.js`
- Run the provided unit test. It should pass. `npm test`
- To run your function in the terminal and check the output, run `node index.js`

### Function Signature

```javascript
const countVowels: {
    total: number,
    a: number,
    e: number,
    i: number,
    o: number,
    u: number
} = ( sentence: string ) => {}
```

### Example usage

```javascript
countVowels( 'Hello World' );
/*
* { total: 3, a: 0, e: 2, i: 0, o: 1, u: 0 }
*/
```