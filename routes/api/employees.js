const express = require('express')
const router = express.Router()
const data = {}
const employeeController = require('../../controllers/employeesController')
const ROLES_LIST = require('../../config/roles_list')
const verifyRoles = require('../../middleware/verifyRoles')
data.employees = require('../../model/employees.json')

router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeeController.getAllEmployees)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeeController.createNewEmployee)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeeController.updateEmployee)
router.route("/:id")
    .get(employeeController.getEmployee)
module.exports = router;