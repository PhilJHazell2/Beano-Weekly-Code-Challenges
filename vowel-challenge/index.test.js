const countVowels = require( './challenge-code' );

describe("countVowels", () => {
	test("countVowels returns an object with correct keys", () => {
		const result = countVowels( 'test' );

		expect(result).toHaveProperty('total');
		expect(result).toHaveProperty('a');
		expect(result).toHaveProperty('e');
		expect(result).toHaveProperty('i');
		expect(result).toHaveProperty('o');
		expect(result).toHaveProperty('u');
	});

	test("countVowels counts the correct number of vowels", () => {
		const result = countVowels( 'The quick brown fox jumps over the lazy dog' );

		expect(result.total).toEqual(11);
		expect(result.a).toEqual(1);
		expect(result.e).toEqual(3);
		expect(result.i).toEqual(1);
		expect(result.o).toEqual(4);
		expect(result.u).toEqual(2);
	});

	test("total is the correct sum of vowels counted", () => {
		const result = countVowels( 'The quick brown fox jumps over the lazy dog' );

		expect(result.total).toEqual(
			result.a + result.e + result.i + result.o + result.u
		);
	});

	test("vowels are counted regardless of case", () => {
		const result = countVowels( 'HEllo WOrld' );

		expect(result.e).toEqual(1);
		expect(result.o).toEqual(2);
	});
});