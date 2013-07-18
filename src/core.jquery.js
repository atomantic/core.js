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
  $.fn.formToObject = function()
  {
      var o = {},
          a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
  };

}(jQuery));
