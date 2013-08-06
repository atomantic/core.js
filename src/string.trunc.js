/**
 * shorten a string, adding a suffix in place of excessive characters
 * default suffix is an html encoded ellipsis '&hellip;'
 * 
 * @param {number}     len     The lenth of the string to keep (not counting suffix)
 * @param {string}  suffix  The suffix to append (e.g. '...<a>read more</a>')
 */
String.prototype.trunc = function(len,suffix) {
    return this.length > len ? this.slice(0, len) + (suffix||'&hellip;') : this;
};