/*global describe, it, expect */
/*jslint jquery:true */
describe("Core.jquery", function() {
    'use strict';

    it("converts form to json object", function() {
        var $form = $($.parseHTML('<form id="formToObject"><input type="text" name="someName" value="someValue" /><input type="hidden" name="hiddenName" value="hiddenValue" /></form>'));
        expect($form.formToObject()).toEqual({
            someName:'someValue',
            hiddenName:'hiddenValue'
        });
    });
});