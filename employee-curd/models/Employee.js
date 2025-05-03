const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  employeeId: {type: Number, unique: true,},
  name: {type: String},
  address: {type: String},
  salary: {type: Number},
  gender: { type: String },
});
module.exports = mongoose.model('Employee', EmployeeSchema);