const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 0
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
