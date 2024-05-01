const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('attendanceRecord'))
.get('/', getRecord('attendanceRecord'))
.get('/:id', getSingleRecord('attendanceRecord'))
.patch('/', updateRecord('attendanceRecord'))
.delete('/', deleteRecord('attendanceRecord'));

module.exports = router;