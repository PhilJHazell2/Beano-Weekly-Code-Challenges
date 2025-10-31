# Challenge: Palindromes

## Instructions

Write a function called `isPalindrome`. It should accept a `string` as an argument and return `true` or `false`
if the string is or isn't a palindrome.  

A palindrome is a word that is spelt the same forwards or backwards. i.e `racecar`  

__Your function should be case-insensitive__  

i.e `Racecar` or `raCecar` still return `true` 

### How to complete the challenge
- `npm install` to get Jest installed
- Add your solution to `challenge-code.js`
- Run the provided unit test. It should pass. `npm test`
- To run your function in the terminal and check the output, run `node index.js`

### Function Signature

```javascript
const isPalindrome: boolean = ( str: string ) => {}
```

### Example usage

```javascript
isPalindrome( 'racecar' );
// true

isPalindrome( 'hello' );
// false
```