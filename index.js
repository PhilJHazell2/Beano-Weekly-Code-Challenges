const decodeMessage = require('./challenge-code');

const secret = decodeMessage();

console.log(secret);
