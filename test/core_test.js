'use strict';

var core = require('../lib/core.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['core'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    var i,str,ones,tens,ord;
    // test.expect(4);
    
    test.equal(core.ord(3), 'rd', 'should be rd.');
    for(i=1;i<120;i++){
      str = i.toString();
      ones = str.slice(-1);
      tens = str.length > 1 ? str.slice(-2).charAt(0) : 0;
      ord = 'th';
      if(ones==='1' && tens!=='1'){
        ord = 'st';
      }
      if(ones==='2' && tens!=='1'){
        ord = 'nd';
      }
      if(ones==='3' && tens!=='1'){
        ord = 'rd';
      }
      test.equal(core.ord(i), ord, 'for '+i+', ones is '+ones+' and tens is '+tens+' so the ord is '+ord+'.');
      
    }
    test.done();
  }
};
