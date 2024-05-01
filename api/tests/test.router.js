const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('tests'))
.get('/', getRecord('tests'))
.get('/:id', getSingleRecord('tests'))
.patch('/', updateRecord('tests'))
.delete('/', deleteRecord('tests'));

module.exports = router;