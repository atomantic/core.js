# Core.js - JS Scaffolding to Make Things Suck Less

## About

OK, let's be honest: lots of stuff about the web just blows. While I may make devil's-advocate and practical arguments against some of the points in [Zed Shaw's talk](http://vimeo.com/43380467), he still makes a lot of great points. 

If the web really worked right, I wouldn't have to create a tool to format the Date in a sensible, readable way. I wouldn't have to provide my own ellipsis method for truncating strings, my own GUID generating function or my own method to convert a number to an ordinal string (1 => "1st"). That's the kind of BS you'll find here. If you think the web works perfect without all this sugar, go for it. You'll probably eventually write some of this over again yourself.

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
var num = prompt('what number?'),
    ord = core.ord(num);
    alert('your number is the '+num+ord);
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
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Adam Eivy (@antic)  
Licensed under the MIT license.
