/*global console*/
/**
 * The ecmascript String prototype
 * @external String
 * @see {@link http://www.ecma-international.org/ecma-262/5.1/#sec-15.5.3.1 ECMASCript 5.1 String.prototype}
 */
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
    String.prototype.startsWith = function (str){
        return this.slice(0, str.length) === str;
    };
}else{
    console.log('core.js library built with excessive String.prototype.startsWith');
}