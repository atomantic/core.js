/*! core - v0.1.0 - 2013-07-22
* https://github.com/atomantic/core.js
* Copyright (c) 2013 Adam Eivy (@antic); Licensed MIT */
/*jslint jquery:true*/
(function($) {
  
  /**
   * convert a form's name/value pairs to a json object
   */
  $.fn.formToObject = function() {
      var o = {},
          a = this.serializeArray(),
          name;
      $.each(a, function() {
        name = this.name;
          if (o[name] !== undefined) {
              if (!o[name].push) {
                  o[name] = [o[name]];
              }
              o[name].push(this.value || '');
          } else {
              o[name] = this.value || '';
          }
      });
      return o;
  };

}(jQuery));

/*jslint browser:true*/
/*
 * core
 * https://github.com/atomantic/core.js
 *
 * Copyright (c) 2013 Adam Eivy (@antic)
 * Licensed under the MIT license.
 */

/**
* Core.js tries to make the web suck less
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
