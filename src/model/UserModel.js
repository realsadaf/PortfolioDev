const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
       
        email : {type: String, required: true},
        otp: {type: String, required: true},
       
        
       

}, { timestamps: true, versionKey : false })

const UserModel = mongoose.model("Users",UserSchema);

module.exports=UserModel ; 