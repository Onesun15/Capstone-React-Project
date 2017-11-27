'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
//const passport = require('passport');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { router: usersRouter} = require('./users');
const { User } = require('./users/models');
const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.get('/api/users', (req, res) => {
  User
    .find()
    .then(user => {
      console.log(user);
      return res.send(user);});
});

app.get('/api/cheeses', (req, res) => {
  return res.json([
    'Bath Blue',
    'Barkham Blue',
    'Buxton Blue',
    'Cheshire Blue',
    'Devon Blue',
    'Dorset Blue Vinney',
    'Dovedale',
    'Exmoor Blue',
    'Harbourne Blue',
    'Lanark Blue',
    'Lymeswold',
    'Oxford Blue',
    'Shropshire Blue',
    'Stichelton',
    'Stilton',
    'Blue Wensleydale',
    'Yorkshire Blue'
  ]);
});

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
