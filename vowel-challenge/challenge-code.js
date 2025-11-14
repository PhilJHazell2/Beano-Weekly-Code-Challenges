const countVowels = ( sentence ) => {
	return { 
		'total': countLetterOcurrence( sentence.toLowerCase(), ['a', 'e', 'i', 'o', 'u'] ),
		'a': countLetterOcurrence( sentence.toLowerCase(), 'a' ),
		'e': countLetterOcurrence( sentence.toLowerCase(), 'e' ),
		'i': countLetterOcurrence( sentence.toLowerCase(), 'i' ),
		'o': countLetterOcurrence( sentence.toLowerCase(), 'o' ),
		'u': countLetterOcurrence( sentence.toLowerCase(), 'u' ),
	}
}

const countLetterOcurrence = ( sentence, letters ) => {
  const lettersToCount = Array.isArray( letters ) ? letters : [ letters ];

  const regexp = new RegExp(`[${lettersToCount}]`, "g");

  return (sentence.match(regexp) || []).length;
};

module.exports = countVowels;