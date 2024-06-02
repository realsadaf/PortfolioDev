const mongoose = require('mongoose');


const BrandSchema = mongoose.Schema({
        brandName : {type: String, required: true},
        brandImg : {type: String, required: false }


}, { timestamps: true, versionKey : false })

const BrandModel = mongoose.model("brands", BrandSchema);

module.exports=BrandModel;