var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
var async=require('async');
var request = require('request');
var promise = require('promise');
//var app = express();

let empSchema = new mongoose.Schema({
	empname:String,
	empdesignation:String
})

var empModel=mongoose.model('empdb',empSchema);

mongoose.connect('mongodb://localhost/empdb',{useNewUrlParser: true},function(err,data){
	if(err){
		console.log('Error in connection');
	}
	else{
		console.log(data);
		console.log('Successfully connected');
	}
})

/*
var myPromise = () => (
    new Promise((resolve, reject) => {

        db.collection('empdbs').find({})

        .then(function(result){
            console.log(result);
            //return updatedResult;
        })

         .then(function(result){
             console.log(result);
             //resolve(result);
        });
    })
);*/
var myPromise = () => (
	new promise(function(resolve,reject){
		empModel.find().toArray
	})
	);

