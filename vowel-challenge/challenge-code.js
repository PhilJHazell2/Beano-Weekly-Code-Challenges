const countVowels = ( sentence ) => {
	const lowercaseSentence = sentence.toLowerCase();
	return { 
		'total': countLetterOcurrence( lowercaseSentence, ['a', 'e', 'i', 'o', 'u'] ),
		'a': countLetterOcurrence( lowercaseSentence, 'a' ),
		'e': countLetterOcurrence( lowercaseSentence, 'e' ),
		'i': countLetterOcurrence( lowercaseSentence, 'i' ),
		'o': countLetterOcurrence( lowercaseSentence, 'o' ),
		'u': countLetterOcurrence( lowercaseSentence, 'u' ),
	}
}

const countLetterOcurrence = ( sentence, letters ) => {
  const lettersToCount = Array.isArray( letters ) ? letters : [ letters ];

  const regexp = new RegExp( `[${lettersToCount}]`, 'g' );

  return ( sentence.match( regexp ) || [] ).length;
};

module.exports = countVowels;