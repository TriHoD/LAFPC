const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  isAdmin: Boolean,
  isActive: Boolean
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin;