/*global core, describe, it, expect */

describe("Core", function() {
    'use strict';

    it("should fetch the english ord suffix of any number", function() {
        var i,str,ones,tens,ord;

        for(i=1;i<120;i++){
            str = i.toString();
            ones = str.slice(-1);
            tens = str.length > 1 ? str.slice(-2).charAt(0) : 0;
            ord = 'th';
            if(ones==='1' && tens!=='1'){
              ord = 'st';
            }
            if(ones==='2' && tens!=='1'){
              ord = 'nd';
            }
            if(ones==='3' && tens!=='1'){
              ord = 'rd';
            }
            expect(core.ord(i)).toEqual(ord);
        }
    });
});