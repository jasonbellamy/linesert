"use strict";


var should   = require( "should" );
var fs       = require( "fs" );
var linesert = require( "../lib/linesert.js" );

describe( "Linesert", function () {

  var path = "test/fixtures/fixture";
  var text = "1.\n2.\n3.\n";

  beforeEach( function( done ) {
    fs.writeFile( path, text, function( err, data ) {
      done();
    });
  });

  it( "should insert a single line BEFORE the specified line numbers.", function( done ) {
    linesert( path ).beforeLine( 1 ).insert( "line one", function( err, data ) {
      data.split( "\n" )[0].should.equal( "line one" );
      done();
    });
  });

  it( "should insert multiple lines before the specified line numbers.", function( done ) {
    linesert( path ).beforeLine( 1 ).insert( ["line one", "line two"], function( err, data ) {
      var lines = data.split( "\n" );

      lines[0].should.equal( "line one" );
      lines[1].should.equal( "line two" );
      done();
    });
  });

  it( "should insert a single line AFTER the specified line numbers.", function( done ) {
    linesert( path ).afterLine( 1 ).insert( "line two", function( err, data ) {
      data.split( "\n" )[1].should.equal( "line two" );
      done();
    });
  });

  it( "should insert multiple lines AFTER the specified line numbers.", function( done ) {
    linesert( path ).afterLine( 1 ).insert( ["line one", "line two"], function( err, data ) {
      var lines = data.split( "\n" );

      lines[1].should.equal( "line one" );
      lines[2].should.equal( "line two" );
      done();
    });
  });

  afterEach( function( done ) {
    fs.writeFile( path, text, function( err, data ) {
      done();
    });
  });

});
