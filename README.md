# Core.js - JS to Make Things Suck Less

[![Build Status](https://travis-ci.org/atomantic/core.js.png?branch=master)](https://travis-ci.org/atomantic/core.js)

## About

OK, let's be honest: lots of stuff about the web just blows. While I may make devil's-advocate and practical arguments against some of the complaints in [Zed Shaw's talk](http://vimeo.com/43380467), he still makes a lot of great points. 

If the web really worked right:

* we wouldn't have to create a tool to format the date in a sensible, readable way (and there wouldn't be 30 different libraries and standard for formatting the same).
* we wouldn't have to provide our own ellipsis method for truncating strings
* our own GUID generating function
* our own method to convert a number to an ordinal string (1 => "1st")
* etc...

That's the kind of BS you'll find here. 
If you think the web works perfect without all this sugar, this isn't for you. You'll probably eventually write some of this over again yourself.

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
<!-- NOTE: by not setting an exports var in the window context, core will create the lib within window.core -->
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

## Documentation
You can view the documentation generated via grunt:jsdoc on github: [http://atomantic.github.io/core.js/docs/](http://atomantic.github.io/core.js/docs/)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "lib" subdirectory!_

## Release History

### <sup>v0.1.0</sup>

 * Grunt build system
 * jsdoc documentation
 * qunit unit tests
 * added some basic methods: fn, eFn, fnMore, ord, $.fn.formToObject

## License
Copyright (c) 2013 Adam Eivy (@antic)  
Licensed under the MIT license.