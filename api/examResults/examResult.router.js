const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('examresults'))
.get('/', getRecord('examresults'))
.get('/:id', getSingleRecord('examresults'))
.patch('/', updateRecord('examresults'))
.delete('/', deleteRecord('examresults'));

module.exports = router;