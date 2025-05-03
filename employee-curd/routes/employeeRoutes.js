const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.getHomepage);

router.get('/employees', employeeController.getEmployees);
router.get('/employees/add', employeeController.showAddForm);
router.post('/employees', employeeController.addEmployee);
router.get('/employees/edit/:id', employeeController.showEditForm);
router.put('/employees/:id', employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;