const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('surveys'))
.get('/', getRecord('surveys'))
.get('/:id', getSingleRecord('surveys'))
.patch('/', updateRecord('surveys'))
.delete('/', deleteRecord('surveys'));

module.exports = router;