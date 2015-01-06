"use strict";


var should   = require( "should" );
var fs       = require( "fs" );
var Linesert = require( "../lib/linesert.js" );

describe( "Linesert", function () {

  var path = "test/fixtures/fixture";
  var text = "1.\n2.\n3.\n";
  var file;

  before( function( done ) {
    file = new Linesert( path );

    fs.writeFile( path, text, function( err, data ) {
      done();
    });
  });

  it( "should insert lines before and after the specified line numbers.", function( done ) {
    file.insert( "line one" ).beforeLine( 1 );
    file.insert( "line two" ).afterLine( 1 );
    file.insert( ["line three", "line four" ] ).afterLine( 2 );
    file.insert( ["line eight", "line nine" ] ).afterLine( 7 );

    fs.readFile( path, { encoding: "utf8" }, function( err, data ) {
      var result = data.split( "\n" );

      result[0].should.equal( "line one" );
      result[1].should.equal( "line two" );
      result[2].should.equal( "line three" );
      result[3].should.equal( "line four" );
      result[7].should.equal( "line eight" );
      result[8].should.equal( "line nine" );
      done();
    });
  });

  after( function( done ) {
    fs.writeFile( path, text, function( err, data ) {
      done();
    });
  });

});
