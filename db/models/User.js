const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  login: {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  admin: {
    type: Boolean,
    default: false,
  },
  phone: String,
  age: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

const User = mongoose.model('User', UserSchema)

module.exports = User
