const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  name: {type: String,},
  price: {type: Number,},
  description: {type: String,}
}, {
  timestamps: true
});
module.exports = mongoose.model('Employee', employeeSchema);