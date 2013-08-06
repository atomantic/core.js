/**
 * get a substring of a particular length from the left
 * 
 * @param {number}     n     The lenth of the string to return
 * @return {string}     The substring
 * @example
 *  'foobar'.left(3) => 'foo'
 */
String.prototype.left = function(n) {
	return this.substr(0,n);
};