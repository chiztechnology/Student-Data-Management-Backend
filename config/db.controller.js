
const { createData, getAllData, getDataById, updateData, deleteData } = require('./db.service')


const createRecord = (tableName) => {
    return (req, res) => {
        const body = req.body;
        createData(`${tableName}`, body, (error, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'An error has occured while creating data'
                })
            }

            return res.status(200).json({
                success: 1,
                message: 'the Item has been created !',
                data: results
            })
        })
    };
}

const getRecord = (tableName)=>{
    return (req, res)=>{
        const body = req.body
        getAllData(`${tableName}`, body, (error, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'An error has occured while fetching data'
                })
            }

            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    }
}

const getSingleRecord = (tableName)=>{
    return (req, res)=>{
        const id = req.body.id
        getDataById(`${tableName}`, id, (error, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'An error has occured while fetching data'
                })
            }

            if(!results){
                return res.json({
                    success: 0,
                    message: 'Record not found'
                })
            }

            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    }
}

const updateRecord = (tableName)=>{
    return (req, res)=>{
        updateData(`${tableName}`, body, (error, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'An error has occured while updating the item'
                })
            }

            if(!results){
                return res.json({
                    success: 0,
                    message: 'Failed to update the item'
                })
            }

            return res.status(200).json({
                success: 1,
                message: 'the Item has been updated !',
            })
        })
    }
}

const deleteRecord = (tableName)=>{
    return (req, res)=>{
        const id = req.body.id
        deleteData(`${tableName}`, id, (error, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'An error has occured while deleting the item'
                })
            }

            return res.status(200).json({
                success: 1,
                message: 'the Item has been deleted !',
            })
        })
    }
}



module.exports = { createRecord, getRecord, getSingleRecord, updateRecord, deleteRecord }