var
	craigslist = requireWithCoverage('index');

describe('functional tests for node-craigslist', function () {
	'use strict';

	this.timeout(25000);

	var client;

	beforeEach(function () {
		client = craigslist.initialize({
				city : 'seattle'
			});

		/*
		client.request.on('request', function (options) {
			console.log(options);
		});
		*/
	});

	describe('#search', function () {
		it('should properly search without options', function (done) {
			client.search('xbox', function (err, data) {
				should.not.exist(err);
				should.exist(data);

				done();
			});
		});
	});

});