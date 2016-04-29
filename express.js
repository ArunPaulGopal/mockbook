var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/test';
var jsonParser = require('body-parser').json();
var port = process.env.PORT || 8080

app.use(express.static('./'));
app.use(express.static('images'))

app.get('/videos', function(req, res, callback) {
  MongoClient.connect(url, function(err, db) {
    if (!err){
      var videos = db.collection('videos');
      videos.find().toArray(function(err, docs){
        var myArray =[];
        for (var i=0; i<docs.length; i++) {
          myArray.push(docs[i])
        }
        db.close();
        res.send(myArray);
      })
    } else {
      db.close();
      res.sendStatus(404);
    }
  })
});

app.get('/timeline', function(req, res, callback) {
  MongoClient.connect(url, function(err, db) {
    if (!err){
      var timeline = db.collection('posts');
      timeline.find().toArray(function(err, docs){
        var myArray =[];
        for (var i=0; i<docs.length; i++) {
          myArray.push(docs[i])
        }
        db.close();
        res.send(myArray);
      })
    } else {
      db.close();
      res.sendStatus(404);
    }
  })
});

app.get('/friends', function(req, res, callback) {
  MongoClient.connect(url, function(err, db) {
    if (!err){
      var timeline = db.collection('users');
      timeline.find({"friend": "true"}).toArray(function(err, docs){
        var myArray =[];
        for (var i=0; i<docs.length; i++) {
          myArray.push(docs[i])
        }
        db.close();
        res.send(myArray);
      })
    } else {
      db.close();
      res.sendStatus(404);
    }
  })
});

app.post('/search', jsonParser, function(req, res, callback) {
  MongoClient.connect(url, function(err, db) {
    if (!err){
      var users = db.collection('users');
      users.find({"name":req.body.content}).toArray(function(err, docs){
        var myArray =[];
        for (var i=0; i<docs.length; i++) {
          myArray.push(docs[i])
        }
        db.close();
        res.send(myArray);
      })
    } else {
      db.close();
      res.sendStatus(404);
    }
  })
});

app.post('/profile', jsonParser, function(req, res, callback) {
  MongoClient.connect(url, function(err, db) {
    if (!err){
      var users = db.collection('users');
      users.find({"id":req.body.content}).toArray(function(err, docs){
        var myArray =[];
        for (var i=0; i<docs.length; i++) {
          myArray.push(docs[i])
        }
        db.close();
        res.send(myArray);
      })
    } else {
      db.close();
      res.sendStatus(404);
    }
  })
});

app.post('/add', jsonParser, function(req, res, callback) {
  MongoClient.connect(url, function(err, db) {
    if (!err){
      var users = db.collection('users');
      users.updateOne(
        {"id":req.body.content},
        {$set: {'friend': 'true'}})
        db.close();
        res.send("Success");
    } else {
      db.close();
      res.sendStatus(404);
    }
  });
});

app.post('/remove', jsonParser, function(req, res, callback) {
  MongoClient.connect(url, function(err, db) {
    if (!err){
      var users = db.collection('users');
      users.updateOne(
        {"id":req.body.content},
        {$set: {'friend': 'false'}})
        db.close();
        res.send("Success");
    } else {
      db.close();
      res.sendStatus(404);
    }
  });
});

app.listen(port,function(){
  console.log("listening on port" + port);
})
