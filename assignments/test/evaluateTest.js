var assert = require('assert');
var evaluator = require('../src/evaluate.js');

describe('evaluator test',function(){
  it('Should return the evaluated value for given expression addition',function(){
    assert.equal(5,evaluator('2+3;'));
  });
  it('Should return the evaluated value for given expression substraction',function(){
    assert.equal(2,evaluator('3-1;'));
  });
  it('Should return the evaluated value for given expression multiplication',function(){
    assert.equal(6,evaluator('2*3;'));
  });
  it('Should return the evaluated value for given expression division',function(){
    assert.equal(2,evaluator('4/2;'));
  });
  it('Should return the evaluated value for given expression for multiple level',function(){
    assert.equal(11,evaluator('2+3*3;'));
  });
  it('Should return the evaluated value for given expression power',function(){
    assert.equal(8,evaluator('2^3;'));
  });
  it('Should return the evaluated value for given expression with assignment',function(){
    assert.equal(4,evaluator('x=2;x+2;'));
  });
  it('Should return the evaluated value for given expression with assignment multiply',function(){
    assert.equal(6,evaluator('x=2;x*3;'));
  });
  it('Should return the evaluated value for given expression with assignment division',function(){
    assert.equal(2,evaluator('x=4;x/2;'));
  });
  it('Should return the evaluated value for given expression with assignment substraction',function(){
    assert.equal(0,evaluator('x=2;x-2;'));
  });
  it('Should return the evaluated value for given expression with assignment power',function(){
    assert.equal(4,evaluator('x=2;x^2;'));
  });
});
