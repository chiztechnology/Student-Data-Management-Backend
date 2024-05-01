const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('students'))
.get('/', getRecord('students'))
.get('/:id', getSingleRecord('students'))
.patch('/', updateRecord('students'))
.delete('/', deleteRecord('students'));

module.exports = router;