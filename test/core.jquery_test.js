/*jslint jquery:true*/
/*global test,module,deepEqual*/
(function($) {
  'use strict';
  
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#core', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });
  
  test('formToObject',function(){
    var $form = $('#formToObject'),
      formObj = $form.formToObject();
    deepEqual(
      formObj,
      {
        someName:'someValue',
        hiddenName:'hiddenValue'
      },
      'Form convert to json object'
    );
  });

}(jQuery));
