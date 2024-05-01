const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('examResult'))
.get('/', getRecord('examResult'))
.get('/:id', getSingleRecord('examResult'))
.patch('/', updateRecord('examResult'))
.delete('/', deleteRecord('examResult'));

module.exports = router;