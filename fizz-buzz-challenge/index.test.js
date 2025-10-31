const fizzBuzz = require( './challenge-code' );

describe("fizzBuzz", () => {
	test("fizzBuzz returns an array with the correct values", () => {
		const array = fizzBuzz( 15 );

		expect( typeof array ).toBe( 'object' );
		expect( array ).toEqual([
			1,
			2,
			'Fizz',
			4,
			'Buzz',
			'Fizz',
			7,
			8,
			'Fizz',
			'Buzz',
			11,
			'Fizz',
			13,
			14,
			'FizzBuzz'
		])
	});
});