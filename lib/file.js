"use strict";

var fs = require( "fs" );
var q  = require( "q" );


/**
 * Handles the file manipulation for reading and adding lines.
 *
 * @constructor
 * @param {string} path - the path of the file to be modified.
 *
 */
var File = function file( path ) {

  if ( !( this instanceof File ) ) {
    return new File( path );
  }

  return {

    /**
     * Reads the file and converts each line to a keyed value in an array.
     *
     * @return {array}
     */
    read: function () {
      var deferred = q.defer();

      fs.readFile( path, { encoding: "utf8" }, function( err, data ) {
        if ( err ) {
          deferred.reject( err );
        } else {
          deferred.resolve( data.split( "\n" ) );
        }
      });

      return deferred.promise;
    },

    /**
     * Merges 2 arrays starting at the specified index in the destination array.
     *
     * @param {array} destination - base array.
     * @param {array} data - array to be merged in to the destination array.
     * @param {number} number - the key number in the destination array to start the merge at.
     * @return {array}
     */
    merge: function( destination, data, number ) {
      data.reverse().forEach( function( value, index ) {
        destination.splice( number, 0, value );
      });

      return destination;
    },

    /**
     * Converts a keyed array in to a string and saves it to the file.
     * @param {array} data - array of data to be converted and saved.
     */
    save: function( data ) {
      fs.writeFile( path, data.join( "\n" ), function( err ) {
        if ( err ) {
          throw err;
        }
      });
    }
  }
};

module.exports = File;
