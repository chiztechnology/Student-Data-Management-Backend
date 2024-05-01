const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('attendancerecords'))
.get('/', getRecord('attendancerecords'))
.get('/:id', getSingleRecord('attendancerecords'))
.patch('/', updateRecord('attendancerecords'))
.delete('/', deleteRecord('attendancerecords'));

module.exports = router;