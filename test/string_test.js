/*jslint jquery:true,browser:true */
/*global test,module,equal,define,ok*/
define([ '../src/safe.js', '../src/string.startsWith.js'], function() {

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

    module('JS#string', {
        // This will run before each test in this module.
        setup: function() {
            //this.elems = $('#qunit-fixture').children();
        }
    });

    test('startsWith', function() {
        var str = 'teststring';
        equal(typeof str.startsWith,'function','startsWith function has been added to String.prototype');
        ok(str.startsWith('t'),'string starts with first letter');
        ok(str.startsWith('te'),'string starts with first two letters');
        ok(str.startsWith('test'),'string starts with first part');
        ok(!str.startsWith('foobar'),'string does not start with foobar');
    });

});
