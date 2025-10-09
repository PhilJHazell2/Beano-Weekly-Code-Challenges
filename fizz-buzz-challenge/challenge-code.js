const fizzBuzz = ( number ) => {
  return Array.from( { length: number }, (_, i) => {
    const n = i + 1;
    const fizz = n % 3 === 0 ? 'Fizz' : '';
    const buzz = n % 5 === 0 ? 'Buzz' : '';
    return fizz || buzz ? fizz + buzz : n;
  } );
}

module.exports = fizzBuzz;