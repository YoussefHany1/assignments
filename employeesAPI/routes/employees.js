const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// Post /api/employees
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;
    const employee = new Employee({ name, price, description });
    const saved = await employee.save();
    res.status(201).json(saved);
});
// Get /api/employees
router.get('/', async (req, res) => {
    const all = await Employee.find();
    res.json(all);
});
// Get /api/employees/:id
router.get('/:id', async (req, res) => {
    const emp = await Employee.findById(req.params.id);
    res.json(emp);
});
// Put /api/employees/:id
router.put('/:id', async (req, res) => {
  const { name, price, description } = req.body;
    const updated = await Employee.findByIdAndUpdate(
      req.params.id,
      { $set: { name, price, description } },
      { new: true, runValidators: true }
    );
    res.json(updated);
});
// Delete /api/employees/:id
router.delete('/:id', async (req, res) => {
    const deleted = await Employee.findByIdAndDelete(req.params.id);
});
module.exports = router;