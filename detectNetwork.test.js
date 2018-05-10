/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  // http://chaijs.com/

  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  // http://chaijs.com/api/bdd/

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 

  // This test doesn't really test anything at all! It will pass no matter what.

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }
    if(even(10) === true) {
      throw new Error('10 should be even!');
    }
  });
});

// -- DINER'S CLUB --
describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901233') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

});

// -- AMERICAN EXPRESS --
describe('American Express', function() {

  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });

});

// -- VISA --
describe('Visa', function() {

  var assert = chai.assert;
 
  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });

});

// -- MASTERCARD --
describe('MasterCard', function() {

  var should = chai.should();

    for (var prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {

  it('has a prefix of ' + prefix + ' and a length of 16', function() {
    detectNetwork(prefix + '00000000000016').should.equal('MasterCard');
  })

    })(prefix)
  }
 
});

// -- DISCOVER --
describe('Discover', function() {

  var should = chai.should();

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6500000000000016').should.equal('Discover');
  })

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6500000000000000019').should.equal('Discover');
  })

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011000000000016').should.equal('Discover');
  })

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011000000000000019').should.equal('Discover');
  })

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {

  it('has a prefix of ' + prefix + ' and a length of 16', function() {
    detectNetwork(prefix + '0000000000016').should.equal('Discover');
  })

  it('has a prefix of ' + prefix + ' and a length of 19', function() {
    detectNetwork(prefix + '0000000000000019').should.equal('Discover');
  })

    })(prefix)
  }

});

// -- MAESTRO --
describe('Maestro', function() {

  var should = chai.should();

      [5018, 5020, 5038, 6304].forEach(function(prefix){
      
  it('has a prefix of ' + prefix + ' and a length of 12', function() {
    detectNetwork(prefix + '00000012').should.equal('Maestro');
  })

  it('has a prefix of ' + prefix + ' and a length of 13', function() {
    detectNetwork(prefix + '000000013').should.equal('Maestro');
  })
      
  it('has a prefix of ' + prefix + ' and a length of 14', function() {
    detectNetwork(prefix + '0000000014').should.equal('Maestro');
  })
      
  it('has a prefix of ' + prefix + ' and a length of 15', function() {
    detectNetwork(prefix + '00000000015').should.equal('Maestro');
  })
      
  it('has a prefix of ' + prefix + ' and a length of 16', function() {
    detectNetwork(prefix + '000000000016').should.equal('Maestro');
  })
      
  it('has a prefix of ' + prefix + ' and a length of 17', function() {
    detectNetwork(prefix + '0000000000017').should.equal('Maestro');
  })
      
  it('has a prefix of ' + prefix + ' and a length of 18', function() {
    detectNetwork(prefix + '00000000000018').should.equal('Maestro');
  })
      
  it('has a prefix of ' + prefix + ' and a length of 19', function() {
    detectNetwork(prefix + '000000000000019').should.equal('Maestro');
  })
      
    });

});

// China UnionPay: a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
describe('should support China UnionPay', function() {
  var should = chai.should();

    for (var prefixA = 622126; prefixA <= 622925; prefixA++) {
    (function(prefixA) {

  it('has a prefix of ' + prefixA + ' and a length of 16', function() {
    detectNetwork(prefixA + '0000000016').should.equal('China UnionPay');
  })
      
  it('has a prefix of ' + prefixA + ' and a length of 17', function() {
    detectNetwork(prefixA + '00000000017').should.equal('China UnionPay');
  })
      
  it('has a prefix of ' + prefixA + ' and a length of 18', function() {
    detectNetwork(prefixA + '000000000018').should.equal('China UnionPay');
  })
      
  it('has a prefix of ' + prefixA + ' and a length of 19', function() {
    detectNetwork(prefixA + '0000000000019').should.equal('China UnionPay');
  })

    })(prefixA)
  }

    for (var prefixB = 624; prefixB <= 626; prefixB++) {
    (function(prefixB) {

  it('has a prefix of ' + prefixB + ' and a length of 16', function() {
    detectNetwork(prefixB + '0000000000016').should.equal('China UnionPay');
  })
      
  it('has a prefix of ' + prefixB + ' and a length of 17', function() {
    detectNetwork(prefixB + '00000000000017').should.equal('China UnionPay');
  })
      
  it('has a prefix of ' + prefixB + ' and a length of 18', function() {
    detectNetwork(prefixB + '000000000000018').should.equal('China UnionPay');
  })
      
  it('has a prefix of ' + prefixB + ' and a length of 19', function() {
    detectNetwork(prefixB + '0000000000000019').should.equal('China UnionPay');
  })

    })(prefixB)
  }

    for (var prefixC = 6282; prefixC <= 6288; prefixC++) {
    (function(prefixC) {

  it('has a prefix of ' + prefixC + ' and a length of 16', function() {
    detectNetwork(prefixC + '000000000016').should.equal('China UnionPay');
  })
      
  it('has a prefix of ' + prefixC + ' and a length of 17', function() {
    detectNetwork(prefixC + '0000000000017').should.equal('China UnionPay');
  })
      
  it('has a prefix of ' + prefixC + ' and a length of 18', function() {
    detectNetwork(prefixC + '00000000000018').should.equal('China UnionPay');
  })
      
  it('has a prefix of ' + prefixC + ' and a length of 19', function() {
    detectNetwork(prefixC + '000000000000019').should.equal('China UnionPay');
  })

    })(prefixC)
  }

});

// Switch: a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
describe('should support Switch', function() {
  var should = chai.should();

  [4903, 4905, 4911, 4936, 6333, 6759].forEach(function(prefixA){
            
  it('has a prefix of ' + prefixA + ' and a length of 16', function() {
    detectNetwork(prefixA + '000000000016').should.equal('Switch');
  })
      
  it('has a prefix of ' + prefixA + ' and a length of 18', function() {
    detectNetwork(prefixA + '00000000000018').should.equal('Switch');
  })
      
  it('has a prefix of ' + prefixA + ' and a length of 19', function() {
    detectNetwork(prefixA + '000000000000019').should.equal('Switch');
  })
      
    });

    [564182, 633110].forEach(function(prefixB){
            
  it('has a prefix of ' + prefixB + ' and a length of 16', function() {
    detectNetwork(prefixB + '0000000016').should.equal('Switch');
  })
      
  it('has a prefix of ' + prefixB + ' and a length of 18', function() {
    detectNetwork(prefixB + '000000000018').should.equal('Switch');
  })
      
  it('has a prefix of ' + prefixB + ' and a length of 19', function() {
    detectNetwork(prefixB + '0000000000019').should.equal('Switch');
  })
      
    });

});
