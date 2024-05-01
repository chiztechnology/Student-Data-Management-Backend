const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('grade'))
.get('/', getRecord('grade'))
.get('/:id', getSingleRecord('grade'))
.patch('/', updateRecord('grade'))
.delete('/', deleteRecord('grade'));

module.exports = router;