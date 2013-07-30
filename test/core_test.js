/*jslint jquery:true,browser:true */
/*global test,module,deepEqual,equal,define,ok*/
define(['jquery', '../src/core.js', '../src/safe.js'], function($, core) {
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

    module('Core#main', {
        // This will run before each test in this module.
        setup: function() {
            this.elems = $('#qunit-fixture').children();
        }
    });

    test('ord', function() {
        var i, str, ones, tens, ord;

        for (i = 1; i < 120; i++) {
            str = i.toString();
            ones = str.slice(-1);
            tens = str.length > 1 ? str.slice(-2).charAt(0) : 0;
            ord = 'th';
            if (ones === '1' && tens !== '1') {
                ord = 'st';
            }
            if (ones === '2' && tens !== '1') {
                ord = 'nd';
            }
            if (ones === '3' && tens !== '1') {
                ord = 'rd';
            }
            equal(core.ord(i), ord, 'for ' + i + ', ones is ' + ones + ' and tens is ' + tens + ' so the ord is ' + ord + '.');

        }
    });

    test('fnMore', function() {
        var fn1 = function(fnArg) {
                this.fn1Arg = fnArg;
                this.fn1Prop = 'fn1';
            },
            fn2 = function(fnArg) {
                this.fn2Arg = fnArg;
                this.fn2Prop = 'fn2';
            },
            obj = {
                name: 'obj'
            },
            fnMore = core.fnMore(fn1, fn2, obj);

        deepEqual(obj, {
            name: 'obj'
        }, 'unmutated object');

        fnMore('an arg');

        deepEqual(
        obj, {
            name: 'obj',
            fn1Arg: 'an arg',
            fn1Prop: 'fn1',
            fn2Prop: 'fn2',
            fn2Arg: 'an arg'
        }, 'mutated object');

    });
    
    test('randRange', function() {
        // test creating a random number within the set [0,4]
        // optionally run frequency analysis to determine how
        // random we truly are...
        // make sure each possibility is hit
        // and make sure no impossibilities are hit
        var iterations = 1000,
            zero = 0,
            one = 0,
            two = 0,
            three = 0,
            four = 0,
            // each value should be returned approx. this many times
            //expectedShare = iterations/5,
            // allow a 20% variance
            //acceptableDifference = expectedShare*0.2,
            // no number should appear less frequently than this
            //lowBound = expectedShare-acceptableDifference,
            // no number should appear more frequently than this
            //highBound = expectedShare+acceptableDifference,
            // holder
            num;
        
        for(var i=0;i<iterations;i++){
            num = core.randRange(0,4);
            ok(num >= 0 && num <= 4,'number is within range ('+num+')');
            if(num===0){
                zero++;
            }else if(num===1){
                one++;
            }else if(num===2){
                two++;
            }else if(num===3){
                three++;
            }else if(num===4){
                four++;
            }
        }
        
        // NOTE: these tests are acedemically interesting but we probably don't really want to test the efficacy of Math.random() unless we want
        // to roll our own alternative in instances where a machine time falls short
        /*
        ok(zero >= lowBound && zero <= highBound,'zero was returned an acceptable number of times ('+zero+')');
        ok(one >= lowBound && one <= highBound,'one was returned an acceptable number of times ('+one+')');
        ok(two >= lowBound && two <= highBound,'two was returned an acceptable number of times ('+two+')');
        ok(three >= lowBound && three <= highBound,'three was returned an acceptable number of times ('+three+')');
        ok(four >= lowBound && four <= highBound,'four was returned an acceptable number of times ('+four+')');
        */
        
    });

});
