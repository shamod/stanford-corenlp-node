/**
 * This is a class to unit test the functions in StanfordCoreNLP module
 *
 * Shamod Lacoul 08 Nov 2012
 *
 * Usage:
 * 	 `mocha` or `mocha -R spec` (in your command line to run the tests)
 */

// require package
var expect = require('chai').expect;

// import StanfordCoreNLP module	
var nlplib = require('../src/StanfordCoreNLP');

/**
 * test to check the Server functions
 */
describe('Server', function(){
	var server;
	before(function(){		
		server = new nlplib.StanfordCoreNLP.Server('../config.json');
	});

	describe('test if the server exists', function() {
		it('expect to be not null', function() {
			expect(server).to.not.equal(null);
		});
	});

	describe('test if the server starts', function() {
		it('expect to start the server', function() {
			server.start();
			expect(server.getStatus().getState()).to.contain('Started');
		});
	});

	describe('test if the server stops', function() {
		it('expect to stop the server', function() {
			server.stop();
			expect(server.getStatus().getState()).to.contain('Stopped');
		});
	});
});