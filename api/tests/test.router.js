const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('test'))
.get('/', getRecord('test'))
.get('/:id', getSingleRecord('test'))
.patch('/', updateRecord('test'))
.delete('/', deleteRecord('test'));

module.exports = router;