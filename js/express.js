var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/test';
var jsonParser = require('body-parser').json();
