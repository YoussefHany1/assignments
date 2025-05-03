const Employee = require('../models/Employee');
exports.getEmployees = async (req, res) => {
    const employees = await Employee.find().sort();
    res.render('employees/index', { employees });
};
exports.showAddForm = (req, res) => {
    res.render('employees/add');
};
exports.addEmployee = async (req, res) => {
    const { employeeId, name, address, salary, gender } = req.body;
    await Employee.create({ employeeId, name, address, salary, gender});
    res.redirect('/employees');
};
exports.showEditForm = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.render('employees/edit', { employee });
};
exports.updateEmployee = async (req, res) => {
    const { name, address, salary, gender } = req.body;
    const employee = await Employee.findById(req.params.id);
    employee.name = name;
    employee.address = address;
    employee.salary = salary;
    employee.gender = gender;
    await employee.save();
    res.redirect(`/employees`);
};
exports.deleteEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    await employee.deleteOne();
    res.redirect('/employees');
};
exports.getHomepage = (req, res) => {
    res.redirect('/employees');
};