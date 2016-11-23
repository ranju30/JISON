var assert = require('assert');
var representation = require('../src/representation.js');

describe('representation test',function(){
  it('Should return the evaluated value for given expression addition',function(){
    assert.equal('(2 + 3)',representation('2+3'));
  });
  it('Should return the evaluated value for given expression substraction',function(){
    assert.equal('(2 - 3)',representation('2-3'));
  });
  it('Should return the evaluated value for given expression multiplication',function(){
    assert.equal('(2 * 3)',representation('2*3'));
  });
  it('Should return the evaluated value for given expression division',function(){
    assert.equal('(2 / 3)',representation('2/3'));
  });
  it('Should return the evaluated value for given expression power',function(){
    assert.equal('(2 ^ 3)',representation('2^3'));
  });
  xit('Should return the evaluated value for given expression addition for multiple level',function(){
    assert.equal('(2 + 3)',representation('2+3+4'));
  });

});
