/*jslint jquery:true,browser:true */
/*global test,module,equal,define,ok*/
define([ 
    '../src/safe.js', 
    '../src/string.startsWith.js', 
    '../src/string.endsWith.js'
    ], function() {

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
    
    var str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like';

    module('JS#string', {
        // This will run before each test in this module.
        setup: function() {
            //this.elems = $('#qunit-fixture').children();
        }
    });

    test('startsWith', function() {
        equal(typeof str.startsWith,'function','startsWith function has been added to String.prototype');
        ok(str.startsWith('I'),'string starts with first letter');
        ok(str.startsWith('It'),'string starts with first two letters');
        ok(str.startsWith('It is a long '),'string starts with first part');
        ok(!str.startsWith('foobar'),'string does not start with foobar');
    });
    
    test('endsWith', function() {
        equal(typeof str.endsWith,'function','endsWith function has been added to String.prototype');
        ok(str.endsWith('e'),'string ends with last letter');
        ok(str.endsWith('like'),'string ends with last two letters');
        ok(str.endsWith('and the like'),'string ends with last part');
        ok(!str.endsWith('foobar'),'string does not end with foobar');
    });

});
