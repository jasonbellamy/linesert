/**
 * linesert
 * https://github.com/jasonbellamy/linesert
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */

"use strict";


var fs = require( "fs" );

/**
 * Inserts new lines at specific lines inside of the provided file.
 *
 * @param {string} path - the path of the file to be modified.
 * @return {object}
 * @example
 *
 * linesert( path ).beforeLine( 1 ).insert( "string", callback );
 * linesert( path ).afterLine( 1 ).insert( ["string", "string"], callback );
 */
var linesert = function( path ) {

  var line = 0;

  /**
   * Merges 2 arrays starting at the specified index in the destination array.
   *
   * @param {array} source - array to be merged in to the destination array.
   * @param {array} destination - base array.
   * @param {number} number - the index number in the destination array to start the merge at.
   * @return {array}
   */
  var merge = function( source, destination, number ) {
    source.reverse().forEach( function( value, index ) {
      destination.splice( number, 0, value );
    });

    return destination;
  };


  return {

    /**
     * Inserts the line(s) in to the file.
     *
     * @param {string|array} data
     * @param {function} cb
     * @return {string} the updated files data.
     */
    insert: function( data, cb ) {
      var input = ( {}.toString.call( data ) === "[object Array]" ) ? data : [ data ];

      fs.readFile( path, { encoding: "utf8" }, function( err, data ) {
        if ( err ) { cb( err ); }
          var result = merge( input, data.split("\n"), line ).join( "\n" );

          fs.writeFile( path, result, function( err ) {
            if ( err ) { cb( err ); }
            cb( null, result );
          });

      });
    },

    /**
     * Sets the location where the lines should be inserted BEFORE.
     *
     * @param {number} number - the line number to start the insertion.
     * @return {object} this
     */
    beforeLine: function( number ) {
      line = number - 1;
      return this;
    },

    /**
     * Sets the location where the lines should be inserted AFTER.
     *
     * @param {number} number - the line number to start the insertion.
     * @return {object} this
     */
    afterLine: function( number ) {
      line = number;
      return this;
    }
  };
};

module.exports = linesert;
