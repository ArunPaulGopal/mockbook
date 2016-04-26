var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/test';
var jsonParser = require('body-parser').json();
var port = process.env.PORT || 8080

app.use(express.static('./'));

app.get('/read', function(req, res, callback) {
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

app.listen(port,function(){
  console.log("listening on port" + port);
})
