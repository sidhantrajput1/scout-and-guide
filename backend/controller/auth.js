const {user_insert} = require('../model/user.js');


async function signup(req,res){
    const json = {};

    try{
        const data = req.body;
        const result = await user_insert(data);
    }
    catch(err){
        console.log(err);
    }
    finally{
        res.end();
    }
}

module.exports={signup};