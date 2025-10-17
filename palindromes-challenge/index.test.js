const isPalindrome = require( './challenge-code' );

describe("isPalindrome", () => {
	test("can determine if a string is a palindrome", () => {
		expect( isPalindrome( 'racecar' ) ).toBe( true );
		expect( isPalindrome( 'hello' ) ).toBe( false );
		expect( isPalindrome( 'RaCecar' ) ).toBe( true );
		expect( isPalindrome( 'hello-world' ) ).toBe( false );
		expect( isPalindrome( '12321' ) ).toBe( true );
	});
});