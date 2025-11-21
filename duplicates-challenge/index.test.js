const removeDuplicates = require( './challenge-code' );

describe("removeDuplicates", () => {
	test("returns a unique array", () => {
		expect( removeDuplicates( [ 1, 2, 3, 4, 5, 5, 1, 2, 3 ] ) ).toEqual( [ 1, 2, 3, 4, 5 ] );
		expect( removeDuplicates( [ 1, 2, 3, 4, 5 ] ) ).toEqual( [ 1, 2, 3, 4, 5 ] );
		expect( removeDuplicates( [] ) ).toEqual( [] );
	});
});