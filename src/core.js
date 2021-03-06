/*global exports,module,define*/
/*jslint browser:true*/
/**
 * The ecmascript String prototype
 * @external String
 * @see {@link http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.3.1 ECMASCript 5.1 String.prototype}
 */
/**
 * Core.js fills in the gaps where standards lag behind by providing a lot of tiny functions
 * that really should just already be there
 *
 * @module core
 * @link https://github.com/atomantic/core.js
 * @copyright 2013 Adam Eivy (@antic)
 * @license MIT
 *
 * @param {object} exports The scope to embed all of the core.js methods
 */
(function(exports) {

    'use strict';
    
    // TODO: Grunt should wrap all of these methods from split files into the outer wrapper
    // that way, we could build a custom version without any or all of these methods


    /**
     * create a partial application function (curry)
     * 
     * @link http://stackoverflow.com/questions/113780/javascript-curry-what-are-the-practical-applications
     * @param {function} fnBase The function to curry or partially apply
     * @return {function}
     * @example
        var adder = function() {
            var n = 0, args = [].slice.call(arguments);
            for (var i = 0, len = args.length; i < len; i++) {
                n += args[i];
            }   
            return n;
        };
        adder(2,2) === 4;
        // curry adder for later application as a partial
        var addTwelve = core.curry(adder, 12);
        addTwelve(5,3) === 20;
     */
    exports.curry = function(fnBase){
         // convert arguments to an array and store reference upward of return closure
         var args = [].slice.call(arguments,1); 
         return function () { 
            // apply the original function with old arguments combined with new arguments
            return fnBase.apply(this, args.concat(args.slice.call(arguments))); 
         };
     };
    /**
     * Get the english ordinal suffix for any number
     *
     * @param {number} n number The number to evaluate
     * @return {string} The ordinal for that number
     * @example:
     *  core.ord(1) === 'st'
     *  core.ord(345) === 'th'
     */
    exports.ord = function(n) {
        var sfx = ["th", "st", "nd", "rd"],
            v = n % 100;
        return sfx[(v - 20) % 10] || sfx[v] || sfx[0];
    };
    
    /**
     * Generic empty function to speed up supplying anon empty functions.
     * If you are using jQuery, you could use $.noop if returning undefined is desireable
     * but this one is useful for anything requiring a boolean true return
     *
     * @return {boolean} true
     * @example
     *  this.onComplete = conf.onComplete||fn;
     */
    exports.fn = function() {
        return true;
    };
    
    /**
     * empty event handler function, which simply prevents default handling
     */
    exports.eFn = function(e) {
        e.preventDefault();
    };

    /**
     * get a new function, which runs two functions serially within a given context
     *
     * @param {function} originalFn The original function to run
     * @param {function} moreFn The extra function to run in the same context after the first
     * @param {object} scope The context in which to run the fn
     * @return {function} the new function which will serially call the given functions in the given scope
     * @example
     *   var fn = core.fnMore(oldFn,newFn,someObj);
     *   fn(); 
     *   // runs oldFn, then newFn in the context of someObj
     */
    exports.fnMore = function(originalFn, moreFn, scope) {
        return scope ?
        function() {
            originalFn.apply(scope, arguments);
            moreFn.apply(scope, arguments);
        } : function() {
            originalFn();
            moreFn();
        };
    };
    
    
    /**
     * get a random integer within a range (including upward and lower bound)
     * 
     * @param {number} from The lower bound
     * @param {number} to The upward bound
     * @return {number}
     * @example
     *  core.randRange(0,5) returns 0,1,2,3,4, or 5
     */
    exports.randRange = function(from,to){
        return Math.floor( Math.random() * (to-from+1) ) + from;
    };
    
    /**
     * generate a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, 
     * where each x is replaced with a random hexadecimal digit from 0 to f, 
     * and y is replaced with a random hexadecimal digit from 8 to b.
     * 
     * @link http://www.ietf.org/rfc/rfc4122.txt
     * @return {string} random uuid
     * @example
     *  var uuid = core.uuid();
     */
    exports.uuid = function(){
        var d = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c==='x' ? r : (r&0x3|0x8)).toString(16);
        });
    };

    // UMD support
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = exports;
    } else if (typeof define === "function" && define.amd) {
        define([], function() {
            return exports;
        });
    }


}(typeof exports === 'object' && exports || (this === window ? window.core = {} : this)));
