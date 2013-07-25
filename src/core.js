/*global exports*/
/*jslint browser:true*/
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
   
   * @param {number} n number The number to evaluate
   * @return {string} The ordinal for that number
   */
  exports.ord = function(n) {
      var sfx = ["th","st","nd","rd"],
          v = n%100;
      return sfx[(v-20)%10] || sfx[v] || sfx[0];
  };
  /**
   * Generic empty function to speed up supplying anon empty functions.
   * If you are using jQuery, you could use $.noop if returning undefined is desireable
   * but this one is useful for anything requiring a boolean true return
   *
   * @return {boolean} true
   */
  exports.fn = function(){return true;};
  /**
   * empty event handler function, which simply prevents default handling
   */
  exports.eFn = function(e){ e.preventDefault(); };
  
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
  exports.fnMore = function(originalFn,moreFn,scope){
      return scope ? function(){
          originalFn.apply(scope,arguments);
          moreFn.apply(scope,arguments);
      } : function(){
          originalFn();
          moreFn();
      };
  };

}(typeof exports === 'object' && exports || (this===window ? window.core={} : this)));
