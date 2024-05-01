const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('grades'))
.get('/', getRecord('grades'))
.get('/:id', getSingleRecord('grades'))
.patch('/', updateRecord('grades'))
.delete('/', deleteRecord('grades'));

module.exports = router;