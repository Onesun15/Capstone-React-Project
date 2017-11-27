'use strict';

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  list: {
    type: Array,
    default: [],
    required: false,
    unique: false
  }
});

UserSchema.methods.apiRepr = function () {
  return {
    firstName: this.firstName,
    email: this.email,
    id: this._id,
    list: this.list
  };
};

UserSchema.methods.validatePassword = function (password){
  return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
};

const User = mongoose.modelNames.User || mongoose.model('User', UserSchema);

module.exports = { User };