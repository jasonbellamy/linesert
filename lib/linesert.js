/**
 * linesert
 * https://github.com/jasonbellamy/linesert
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */

"use strict";


var File = require( "./file.js" );

/**
 * Inserts new lines at specific lines inside of the provided file.
 *
 * @constructor
 * @param {string} path - the path of the file to be modified.
 * @example
 *
 * var file = new Linesert( "file.txt" );
 * file.insert( "string one" ).beforeLine( 1 );
 * file.insert( ["string two", "string three"] ).afterLine( 2 );
 *
 */
var Linesert = function linesert( path ) {

  if ( !( this instanceof Linesert ) ) {
    return new Linesert( path );
  }

  /** store the input to be added to the file. **/
  var input = [];

  var file     = new File( path );
  var openFile = file.read();

  /**
   * Inserts the new lines at a specified line in the file.
   *
   * @private
   * @param {number} number - the line number to start the insertion.
   */
  var insertLinesAt = function insertLines( number ) {
    (function( input ) {
      openFile.then( function( data ) {
        return file.merge( data, input, number );
      }).then( function( data ) {
        return file.save( data ); })
      .done();
    })( input );
  };


  /**
   * @exports
   */
  return {
    /**
     * Sets the line(s) to be inserted.
     *
     * @param {string|array} data
     * @return {object}
     */
    insert: function( data ) {
      input = ( {}.toString.call( data ) === "[object Array]" ) ? data : [ data ];
      return this;
    },

    /**
     * Insert the new lines BEFORE the specified line.
     *
     * @param {number} number - the line number to start the insertion.
     * @return {boolean} true on success or false on failure.
     */
    beforeLine: function( number ) {
      return insertLinesAt( number - 1 );
    },

    /**
     * Insert the new lines AFTER the specified line.
     *
     * @param {number} number - the line number to start the insertion.
     * @return {boolean} true on success or false on failure.
     */
    afterLine: function( number ) {
      return insertLinesAt( number );
    }
  };
};

module.exports = Linesert;
