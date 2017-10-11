const should = require('chai').should();

const adder = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  // test the normal case
  it('should have remainder of 0 if divided by 15', function() {
    const normalCases = [
      {num: 15, expected: 0},
      {num: 120, expected: 0},
      {num: 240, expected: 0}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should have remainder of 0 if divided by 5', function() {
    const normalCases = [
      {num: 15, expected: 0},
      {num: 5, expected: 0},
      {num: 240, expected: 0}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

it('should have remainder of 0 if divided by 3', function() {
    const normalCases = [
      {num: 15, expected: 0},
      {num: 3, expected: 0},
      {num: 240, expected: 0}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
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