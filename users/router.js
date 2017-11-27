'use strict';
const express = require ('express');
const bodyParser = require('body-parser');
const { User } = require('./models');
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user.apiRepr()));
});