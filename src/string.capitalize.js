/**
 * Capitalizes the first letter of a string and downcases all the others.
 * @example
 *  'hello'.capitalize() => 'Hello'
 *  'HELLO WORLD!'.capitalize() =>'Hello world!'
 */
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
};