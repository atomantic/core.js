/*! core - v0.1.0 - 2013-07-18
* https://github.com/atomantic/core.js
* Copyright (c) 2013 Adam Eivy (@antic); Licensed MIT */
/*global exports*/
(function(exports) {

  'use strict';

  exports.ord = function(n) {
      var sfx = ["th","st","nd","rd"],
          v = n%100;
      return sfx[(v-20)%10] || sfx[v] || sfx[0];
  };

}(typeof exports === 'object' && exports || this));
