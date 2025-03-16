const database = require('./database.js');


async function user_insert(data){
    const result = {};
    try{
        const db = await database()
        let query = `insert into user (name,email,phoneno,type,username,password) values('${data.name}','${data.email}','${data.phoneNo}','${data.type}','${data.userName}','${data.password}')`;
        db.query(query,(err,result)=>{
            if(err){
                if(err.errno==1062){
                    result.flag=0;
                    result.msg="duplicate username"
                }
                else{
                    result.flag=0,
                    result.msg="server error";
                }
                console.log("user_insert err :",err);
            }
            else{
                result.flag=1;
                result.masg="data stored"
            }
        })
    }   
    catch(err){
        result.flag=0;
        result.msg="error";
        console.log("user_insert err :",err);
    }
    finally{
        return result;
    }
}

module.exports = {user_insert};