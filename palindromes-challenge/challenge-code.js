const isPalindrome = str => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

module.exports = isPalindrome;