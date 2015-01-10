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
var linesert = require( "linesert" );

// file.txt
//=> 1.
//=> 3.

linesert( "file.txt" ).beforeLine( 2 ).insert( "2.", function( err, result ) {
  //=> 1.
  //=> 2.
  //=> 3.
});
```


## API

### linesert( path )

Name   | Type     | Argument     | Description
-------|----------|--------------|------------
path   | `string` | `<required>` | the path of the file to be modified.

### linesert.beforeLine( number )

Name   | Type     | Argument     | Description
-------|----------|--------------|------------
number | `number` | `<required>` | the line number to insert the new lines before.

### linesert.afterLine( number )

Name   | Type     | Argument     | Description
-------|----------|--------------|------------
number | `number` | `<required>` | the line number to insert the new lines after.

### linesert.insert( text, callback )

Name     | Type           | Argument     | Description
---------|----------------|--------------|------------
text     | `string|array` | `<required>` | a string or array of strings to insert.
callback | `function`     | `<required>` | callback that returns the results of the update.

#### callback( error, results )

Name     | Type       | Argument     | Description
---------|------------|--------------|------------
error    | `error`    | `<required>` | any errors that may have occured.
results  | `string`   | `<required>` | the output of the updated file.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
