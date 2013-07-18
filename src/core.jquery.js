/*
 * core
 * 
 *
 * Copyright (c) 2013 Adam Eivy (@antic)
 * Licensed under the MIT license.
 */
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
