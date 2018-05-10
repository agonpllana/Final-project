// ==== Using packages ====
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// ==== Getting Contract Model(Schema) ====
const Contract = require('./models/Contracts.js');

// ==== Init app ====
const app = express();

// ==== Body Parser Middleware ====
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// ==== Connection to MongoDB with Mongoose ====
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contracts', {useMongoClient: true})
  .then(function() {
     console.log('Successfully connected to MongoDB!')
  }).catch(function(err) {
     console.error(err)
  });

// ==== ROUTES ====

/* INDEX */
app.get('/', function(req, res, next) {
   res.send("Welcome to Contracts API");
});

/* GET ALL Contracts */
app.get('/contracts', function(req, res) {
   // Code for handling Contracts(data) to be returned as JSON
   Contract.find({}, (err, results) => {
     if(err) {
       res.json({
         confirmation: 'fail',
         err: err.message
       })
     } else {
       res.json({
         confirmation: 'success',
         data: results
       })
     }
   })
});

/* CREATE Contract */
app.post('/contracts', function(req, res) {
   // Code for handling create Contract to DB and return as JSON
   Contract.create(req.body, (err, result) => {
    if(err) {
      res.json({
        confirmation: 'fail',
        err: err.message
      })
    } else {
      res.json({
        confirmation: 'success',
        data: result
      })
    }
   })
});

/* GET Contract */
app.get('/contracts/:id', function(req, res) {
  Contract.findById(req.params.id, (err, result) => {
    if(err) {
      res.json({
        confirmation: 'fail',
        err: err.message
      })
    } else {
      res.json({
        confirmation: 'success',
        data: result
      })
    }
  })
   // Code for getting one specific Contract and return as JSON
});

/* UPDATE Contract */
app.put('/contracts/update/:id', function(req, res) {
  Contract.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, result) => {
    if(err) {
      res.json({
        confirmation: 'fail',
        err: err.message
      })
    } else {
      res.json({
        confirmation: 'success',
        data: result
      })
    }
  })
   // Code for updating one specific Contract and return as JSON
});

/* DELETE Contract */
app.delete('/contracts/delete/:id', function(req, res) {
   // Code to delete one specific Contract and return message as JSON
   Contract.deleteOne({_id: req.params.id}, (err, result)=> {
     if(err) {
      res.json({
        confirmation: 'fail',
        err: err.message
      })
    } else {
      res.json({
        confirmation: 'success',
        data: result
      })
    }
   })
});

// ==== Run Application ====
app.listen(3000, () => {
  console.log('Express server is running at http://127.0.0.1:3000');
});
