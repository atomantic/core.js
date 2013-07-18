/*
 * core
 * https://github.com/atomantic/core.js
 *
 * Copyright (c) 2013 Adam Eivy (@antic)
 * Licensed under the MIT license.
 */
/*global exports*/
/*jslint browser:true*/
(function(exports) {

  'use strict';

  /**
   * ord returns the english ordinal for any number
   * @n number The number to evaluate
   * @return string The ordinal for that number
   */
  exports.ord = function(n) {
      var sfx = ["th","st","nd","rd"],
          v = n%100;
      return sfx[(v-20)%10] || sfx[v] || sfx[0];
  };
  /**
   * generic empty function to speed up supplying anon empty functions
   * could also use $.noop if returning undefined is desireable
   * but this one is useful for anything requiring a boolean true return
   * 
   * @return true
   */
  exports.fn = function(){return true;};
  /**
   * empty event handler function, which simply prevents default handling
   */
  exports.eFn = function(e){ e.preventDefault(); };
  
  /**
   * fnMore adds another function to be called after another completes
   * 
   * @param originalFn The original function to run
   * @param moreFn The extra function to run in the same context after the first
   * @param scope The context in which to run the fn
   * 
   * @return the new function which will serially call the given functions in the given scope
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
