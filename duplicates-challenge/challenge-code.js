const removeDuplicates = ( array ) => {
	const uniqueSet = new Set( array );
	return Array.from( uniqueSet );
}

module.exports = removeDuplicates;