const { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord} = require('../../config/db.controller')
const router = require('express').Router();

router.post('/', createRecord('tallyForm'))
.get('/', getRecord('tallyForm'))
.get('/:id', getSingleRecord('tallyForm'))
.patch('/', updateRecord('tallyForm'))
.delete('/', deleteRecord('tallyForm'));

module.exports = router;