const {verify} = require('jsonwebtoken');

module.exports = {
    checkToken: (req, res, next) =>{
        let token = req.get('authorization');
        if(token){
            // removing the 'Bearer prefix'
            token = token.slice(7);
            verify(token, 'qwe1234', (err, decoded)=>{
                if(err){
                    return res.json({
                        success: 0,
                        message: 'Invalid token'
                    })
                }
                next();
            })
        }else{
            res.json({
                success: 0,
                message: 'Access denied ! unauthorized user'
            })
        }
    }
}