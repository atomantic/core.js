/*jslint jquery:true*/
/*global test,module,equal,core*/
(function($) {
  'use strict';
  
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#core', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('ord', function() {
    var i,str,ones,tens,ord;
    // expect(4);
    
    equal(core.ord(3), 'rd', 'should be rd.');
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
      equal(core.ord(i), ord, 'for '+i+', ones is '+ones+' and tens is '+tens+' so the ord is '+ord+'.');
      
    }
  });

}(jQuery));
