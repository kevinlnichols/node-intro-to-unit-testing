const should = require('chai').should();

const adder = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  // test the normal case
  it('should have remainder of 0 if divided by 15', function() {
    [15, 30, 45].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should have remainder of 0 if divided by 5', function() {
    const normalCases = [5, 10, 20];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('buzz');
    });
  });

it('should have remainder of 0 if divided by 3', function() {
    const normalCases = [3, 6, 9, 12];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz');
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });
});