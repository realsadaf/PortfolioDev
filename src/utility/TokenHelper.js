const jwt = require("jsonwebtoken")

exports.EncodeToken=()=>{
    let KEY="123-ABD-XYZ";
    let EXPIRE={expiresIn:"24h"};
    let PAYLOAD={email:email, user_id:user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)    
    
}


exports.DecodeToken=()=>{
    try{
        let KEY="123-ABD-XYZ";
        return jwt.verify(token,KEY)

    }
    catch(e){
        return null

    }
    
}
