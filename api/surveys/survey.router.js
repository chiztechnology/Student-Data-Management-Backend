const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('survey'))
.get('/', getRecord('survey'))
.get('/:id', getSingleRecord('survey'))
.patch('/', updateRecord('survey'))
.delete('/', deleteRecord('survey'));

module.exports = router;