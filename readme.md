# Linesert [![Build Status](https://travis-ci.org/jasonbellamy/linesert.png?branch=master)](https://travis-ci.org/jasonbellamy/linesert)

> Easily insert line(s) at a specific line number of a file.


## Features
[Linesert](https://github.com/jasonbellamy/linesert) allows you to easily insert lines at a specific line number of a file.

- Insert a single line **or** an array of lines.
- Insert lines **before** a specific line number.
- Insert lines **after** a specific line number.


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save linesert`


## Usage

```javascript
var Linesert = require( "linesert" );

var file = new Linesert( "file.txt" );
/* file.txt
   1.
   3.
*/

file.insert( "2." ).beforeLine( 2 );
/* file.txt
   1.
   2.
   3.
*/
```


## API

### Linesert( path )

Name   | Type     | Argument     | Description
-------|----------|--------------|------------
path   | `string` | `<required>` | the path of the file to be modified.

### Linesert.insert( text )

Name   | Type           | Argument     | Description
-------|----------------|--------------|------------
text   | `string|array` | `<required>` | a string or array of strings to insert.

### Linesert.beforeLine( number )

Name   | Type     | Argument     | Description
-------|----------|--------------|------------
number | `number` | `<required>` | the line number to insert the new lines before.

### Linesert.afterLine( number )

Name   | Type     | Argument     | Description
-------|----------|--------------|------------
number | `number` | `<required>` | the line number to insert the new lines after.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
