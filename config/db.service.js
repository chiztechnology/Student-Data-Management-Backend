const pool = require('./database');

module.exports = {
    createData: (table, data, callback) =>{
      const fields = Object.keys(data).join(', ');
      const placeholders = Object.values(data).map(() => '?').join(', ');
      
      pool.query(
        `INSERT INTO ${table} (${fields}) VALUES (${placeholders})`,
        Object.values(data),
        (error, results, fields)=>{
          if(error){
            return callback(error);
          }
          return callback(null, results)
        }
      )
    },
    getAllData: (table, callback) => {
      pool.query(
        `SELECT * FROM ${table}`,
        [],
        (error, results, fields) => {
          if(error){
            return callback(error);
          }
          return callback(null, results)
        }
      )
    },
    getDataById: (table, id, callback) =>{
      pool.query(
        `SELECT * FROM ${table} WHERE id = ?`,
        [id],
        (error, results, fields) =>{
          if(error){
            return callback(error);
          }
          return callback(null, results[0])
        }
      )
    },
    updateData: (table, data, callback) =>{
      const id = data.id;
      delete data.id;
      
      const setClause = Object.keys(data).map(field => `${field} = ?`).join(', ');
      
      pool.query(
        `UPDATE ${table} SET ${setClause} WHERE id = ?`,
        [...Object.values(data), id],
        (error, results, fields)=>{
          if (error){
            return callback(error);
          }
          return callback(null, results)
        }
      )
    },
    deleteData: (table, id, callback) => {
      pool.query(
        `DELETE FROM ${table} WHERE id = ?`,
        [id],
        (error, results, fields)=>{
          if(error){
            return callback(error);
          }
          return callback(null, results[0])
        }
      )
    }
  }
  