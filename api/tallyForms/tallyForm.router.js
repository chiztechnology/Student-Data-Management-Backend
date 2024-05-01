const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('tallyforms'))
.get('/', getRecord('tallyforms'))
.get('/:id', getSingleRecord('tallyforms'))
.patch('/', updateRecord('tallyforms'))
.delete('/', deleteRecord('tallyforms'));

module.exports = router;