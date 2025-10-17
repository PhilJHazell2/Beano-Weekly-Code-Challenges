const isPalindrome = ( word ) => {
	const lowercased = word.toLowerCase();
	const reversed   = lowercased.split('').reverse().join('');

	return lowercased === reversed;
}

module.exports = isPalindrome;