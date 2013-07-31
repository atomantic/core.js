/*! core - v0.1.1 - 2013-07-31
* https://github.com/atomantic/core.js
* Copyright (c) 2013 Adam Eivy (@antic); Licensed MIT */
/*global define*/
/**
 * The jQuery plugin namespace.
 * @external jQuery
 * @see {@link http://docs.jquery.com/Plugins/Authoring The jQuery Plugin Guide}
 */
/**
 * core.jquery is a set of standard mini jquery plugins and extensions
 * This set of extensions adds functionality to the jQuery.fn external library
 * 
 * @module core.jquery
 * @memberOf jQuery
 *
 * @copyright 2013 Adam Eivy (@antic)
 * @license MIT
 */
 
(function(){
    'use strict';
    var plugin = function($) {
    
        // fn Plugins
        
        /**
         * convert a form's name/value pairs to a json object
         * 
         * @function external:jQuery.formToObject
         * @example 
         * // captures the field/value set from #myform
         * var formData = $('#myform').formToObject();
         * 
         * @return {object} a json representation of the form
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
        
        // Expressions  
        
        /**
         * :containsI() allows the query of elements containing case-insensitive text
         * works just like $(':contains(text)') but as $(':containsI(text)')
         * Additionally, allows regex searches:
         * @example
         *  $("p:containsI('\\bup\\b')") (Matches "Up" or "up", but not "upper", "wakeup", etc.)
         *  $("p:containsCI('(?:Red|Blue) state')") (Matches "red state" or "blue state", but not "up state", etc.)
         *  $("p:containsCI('^\\s*Stocks?')") (Matches "stock" or "stocks", but only at the start of the paragraph (ignoring any leading whitespace).)
         */
        $.expr[":"].containsI = function(elem, i, match) {
            return (new RegExp (match[3], 'i')).test(elem.textContent || elem.innerText || '');
        };
        /**
         * :startsWith() returns a selection of elements that have text
         * starting with the given string
         * usage: $(':startsWith(text)')
         */
        $.expr[":"].startsWith = function(elem, i, match) {
            return ( elem.textContent || elem.innerText || '' ).indexOf( match[3] ) === 0;
        };
    };
    
    // support for requirejs
    if ( typeof define === 'function' && define.amd ) {
        define(['jquery'], function ($) { 
            return plugin($); 
        } );
    } else {
        plugin(jQuery);
    } 
}());
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
    
    // TODO: Grunt should wrap all of these methods from split files into the outer wrapper
    // that way, we could build a custom version without any or all of these methods

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
     * get a random integer within a range (including upward and lower bound)
     * @example
     * core.randRange(0,5) returns 0,1,2,3,4, or 5
     * @param {number} from The lower bound
     * @param {number} to The upward bound
     */
    exports.randRange = function(from,to){
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

/*global console*/

// make it safe to use console.log always
(function(a) {
    function b() {}
    for (
        var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), 
        d; !! (d = c.pop());
    ) {
        a[d] = a[d] || b;
    }
})((function() {
    try {
        console.log();
        return window.console;
    } catch (a) {
        return (window.console = {});
    }
}()));
if (typeof String.prototype.endsWith !== 'function') {
    /**
     * see if a string ends with a given string
     * Once ecmascript adds this natively, you should build core.js without this method:
     * @link http://wiki.ecmascript.org/doku.php?id=harmony%3astring_extras
     * @link http://jsperf.com/string-prototype-endswith/3
     * @function external:String.prototype.endsWith
     * @example
     *  'some string'.endsWith('g') => true;
     *  'some string'.endsWith('string') => true;
     *  'some string'.endsWith('!') => false;
     * @param {string} A substring expected to be in the beginning of this string
     * @return {boolean}
     */
    String.prototype.endsWith = function (suffix){ 
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}else{
    console.log('core.js library built with excessive String.prototype.endsWith');
}
if (typeof String.prototype.startsWith !== 'function') {
    /**
     * see if a string begins with a given string
     * Once ecmascript adds this natively, you should build core.js without this method:
     * @link http://wiki.ecmascript.org/doku.php?id=harmony%3astring_extras
     * @function external:String.prototype.startsWith
     * @example
     *  'some string'.startsWith('s') => true;
     * @param {string} A substring expected to be in the beginning of this string
     * @return {boolean}
     */
    String.prototype.startsWith = function (prefix){
        return this.slice(0, prefix.length) === prefix;
    };
}else{
    console.log('core.js library built with excessive String.prototype.startsWith');
}