var fs=require('fs');
var request = require('request');
var async=require('async');

//each

async.each([1,2,3,4,5],	(singleEle, callback) => {
	console.log('@@@@@@')

  callback()

}, function (err) {
    console.log("ALL FINISH");

});

//eachSeries

async.eachSeries([1,2,3,4,5],(singleEle, callback) => {
	console.log('@@@@@@')
  callback()

}, function (err) {
    console.log("ALL FINISH");

});

//parellel

	async.parallel([

	    function(callback) {
	    	console.log('hello');
	    	callback(null,'first function')
	    },

	    function(callback) {
	    	console.log('Welcome');
	    	callback(null,'second function')
	    }
	],

	function(err, results) {
		console.log(err);
		console.log(results);
	}
	);

	//waterfall

	async.waterfall([

	    function(callback) {
	    		console.log('First function');
	        callback(null,'one');
	    },

	    function(arg1, callback) {

	    		console.log('Second function');
	    		console.log(arg1);
	        callback(null, 'two','three');
	    },

	    function(arg1, arg2, callback) {

	    		console.log('Third function');
	        console.log(arg1);
	        console.log(arg2);
	        callback(null, 'done');
	    }],

	    function (err, result) {
	    	console.log('Finish');
	});

	//whilst

	var count = 0;
	async.whilst(

	    function() {
	    	console.log(count);
	    	return count < 5;
	    },

	    function(callback) {
	        count++;
	        //console.log(count);
	        callback()
	    },

	    function (err, n) {
	        console.log('final callback');
	    }
	);