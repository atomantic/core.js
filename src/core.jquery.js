/*jslint jquery:true*/
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