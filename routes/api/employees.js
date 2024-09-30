const express = require('express')
const router = express.Router()
const data = {}
const employeeController = require('../../controllers/employeesController')
data.employees = require('../../data/employees.json')
router.route('/')
    .get(employeeController.getAllEmployees)
    .post(employeeController.createNewEmployee)
    .put(employeeController.updateEmployee)
router.route("/:id")
    .get(employeeController.getEmployee)
module.exports = router;