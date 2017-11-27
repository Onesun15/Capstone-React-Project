'use strict';
const express = require ('express');
const bodyParser = require('body-parser');
const { User } = require('./models');
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', (req, res) => {
  // User.findById(req.params.id)
  //   .then(user => res.json(user.apiRepr()));
  res.json({test: 'test'});
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user.apiRepr()));
});

router.post('/', (req, res) => {
  const requiredFields = ['firstName', 'email', 'password'];
  const missingField = requiredFields.find(field => !(field in req.body));
  if(missingField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidateError',
      message: 'Missing Field',
      location: missingField
    });
  }
  let { firstName, email, password } = req.body;
  return User.find({email})
    .count()
    .then(count =>{
      if (count > 0) {
        return Promise.reject({
          code: 422,
          reason: 'ValidationError',
          message: 'Email already taken',
          location: 'email'
        });
      }
      return User.hashPassword(password);
    })
    .then(hash => {
      return User.create({ firstName, email, password:hash});
    })
    .then(user => {
      return res.status(201).json(user.apiRepr());
    })
    .catch(err => {
      if (err.reason === 'ValidationError') {
        return res.status(err.code).json(err);
      }
      res.status(500).json({ code: 500, message: 'Internal Server Error'});
    });
});
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {$push: {wishList:req.body.item.rating}},
    function(err){
      if(err) {
        console.log(err);
      }
      else {
        res.send('Everything seems to be working');
      }
    });
});

router.delete('/:id', (req, res) => {
  console.log(req.body);
  User.update({'_id':req.params.id}, {$pull:{wishList: req.body.wishList}},
    function(err) {
      if(err){
        console.log(err);
      }
      else {
        res.send('everything seems to be working');
      }
    });
});
module.exports = { router };