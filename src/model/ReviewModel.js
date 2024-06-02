const mongoose = require('mongoose');


const ReviewSchema = mongoose.Schema({
       
        productID : {type: String, required: true},
        userID: {type: String, required: true},
        des: {type: String, required: true},
        rating: {type: String, required: true},
        
       

}, { timestamps: true, versionKey : false })

const ReviewModel = mongoose.model("reviews",ReviewSchema);

module.exports=ReviewModel ;