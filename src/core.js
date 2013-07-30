/*global exports,module,define*/
/*jslint browser:true*/
/**
 * The ecmascript String prototype
 * @external String
 * @see {@link http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.3.1 ECMASCript 5.1 String.prototype}
 */
/**
 * Core.js tries to make the web suck less by providing a bunch of
 * tiny methods and library extensions that should be natively available.
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

    /**
     * Get the english ordinal suffix for any number
     *
     * @param {number} n number The number to evaluate
     * @return {string} The ordinal for that number
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
     * @example
     *    var fn = core.fnMore(oldFn,newFn,someObj);
     *    fn(); // runs oldFn, then newFn in the context of someObj
     * @param {function} originalFn The original function to run
     * @param {function} moreFn The extra function to run in the same context after the first
     * @param {object} scope The context in which to run the fn
     * @return {function} the new function which will serially call the given functions in the given scope
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
     * get a random integer between set (including upward and lower bound)
     * @example
     * core.randBetween(0,5) returns 0,1,2,3,4, or 5
     * @param {number} from The lower bound
     * @param {number} to The upward bound
     */
    exports.randBetween = function(from,to){
        return Math.floor( Math.random() * (to-from+1) ) + from;
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
