const mongoose = require('mongoose');


const WishSchema = mongoose.Schema({
       
        productID : {type: String, required: true},
        userID : {type: String, required: true},
       
        
       

}, { timestamps: true, versionKey : false })

const WishModel = mongoose.model("Wishs",WishSchema);

module.exports=WishModel ; 