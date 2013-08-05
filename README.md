# Core.js - Everything that should be there but isn't

[![Build Status](https://travis-ci.org/atomantic/core.js.png?branch=master)](https://travis-ci.org/atomantic/core.js)

## About

OK, let's be honest: web standards can't keep up with innovation. While I may make devil's-advocate and practical arguments against some of the complaints in [Zed Shaw's talk](http://vimeo.com/43380467), he still makes a lot of great points regarding the speed (or lack thereof) in standards adoption.

If web standards were implemented as quickly as they should be:

* we wouldn't have to write out ```Math.floor( Math.random() * (10-1+1) ) + 1``` in order to choose a number between 1 and 10!
* we wouldn't have to create a tool to format the date in a sensible, readable way (and there wouldn't be 30 different libraries and standards for doing it).
* we wouldn't have to provide our own ellipsis method for truncating strings
* our own UUID generating function
* our own method to get the ordinal suffix of a number (1 => "st")
* etc...

That's the kind of BS you'll find here. 
If you think the web works perfect without all this sugar, this isn't for you. You'll probably eventually write some of this over again yourself and end up polluting the global namespace to have that nice little global helper everywhere. Or you could [custom download](http://atomantic.github.io/core.js) a version of core.js with all those tools contained within a single namespace.

Additionally, this library provides a selection of String methods in patient anticipation of the next ecmascript standard, hoping it might have some of these methods: http://wiki.ecmascript.org/doku.php?id=harmony%3astring_extras

If you want polyfils for ES5, I highly recommend using [the es5-shim](https://github.com/kriskowal/es5-shim) in tandem with core.js and your custom code.

## Getting Started
### On the server
Install the module with: `npm install core`

```javascript
var core = require('core');

// "get the english ordinal for a number"
var num = 345,
    ord = core.ord(num),
    out = 'your number is the '+num+ord;
// out is now 'your number is the 345th';
```

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/atomantic/core.js/master/dist/core.min.js
[max]: https://raw.github.com/atomantic/core.js/master/dist/core.js

In your web page:

```html
<!-- NOTE: by not setting an exports var in the window context, core will create the lib within window.core (or core.*) -->
<script src="dist/core.min.js"></script>
<script>
// "get the english ordinal for a number"
var num = 345,
    ord = core.ord(num);
    out = 'your number is the '+num+ord;
// out is now 'your number is the 345th';
</script>
```

In your code, you can attach core's methods to any object.

```html
<script>
var exports = Bocoup.utils;
</script>
<script src="dist/core.min.js"></script>
<script>
// "get the english ordinal for a number"
var num = 345,
    ord = Bocoup.utils.ord(num),
    out = 'your number is the '+num+ord;
// out is now 'your number is the 345th';
</script>
```

## Custom Build!
You can customize your build of core.js to only get the parts you want: [http://atomantic.github.io/core.js](http://atomantic.github.io/core.js)

## Documentation
You can view the documentation generated via grunt:jsdoc on github: [http://atomantic.github.io/core.js/docs/](http://atomantic.github.io/core.js/docs/)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Please note that the codebase uses 4 spaces (not 2) instead of tabs--and uses the comma pattern for declaring sets of new variables. 
Add unit tests for any new or changed functionality. 
Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please note that only the index.html in the "dist" subdirectory is manually edited for the purpose of DownloadBuilder.js--the rest are generated via Grunt. You'll find source code in the "src" subdirectory!_

## Release History

### <sup>v0.1.1</sup>

 * curry(fn)
 * uuid()
 * randRange(from,to)
 * safe console.log
 * String.prototype.startsWith(prefix)
 * String.prototype.endsWith(suffix)
 
### <sup>v0.1.0</sup>

 * Grunt build system
 * jsdoc documentation
 * qunit unit tests
 * added some basic methods: fn, eFn, fnMore, ord, $.fn.formToObject
 * requirejs support

## License
Copyright (c) 2013 Adam Eivy (@antic)  
Licensed under the MIT license.