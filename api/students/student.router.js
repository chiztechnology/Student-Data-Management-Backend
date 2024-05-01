const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('student'))
.get('/', getRecord('student'))
.get('/:id', getSingleRecord('student'))
.patch('/', updateRecord('student'))
.delete('/', deleteRecord('student'));

module.exports = router;