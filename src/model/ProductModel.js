const mongoose = require('mongoose');


const  ProductSchema = mongoose.Schema({
       
        title : {type: String, required: true},
        shortDes : {type: String, required: true},
        price : {type: Number, required: true},
        discount : {type: String, required: true},
        discountPrice : {type: Number, required: true},
        image : {type: String, required: true},
        star: {type: String, required: true},
        stock: {type: String, required: true},
        remark: {type: String, required: true},
        categoryID: {type: String, required: true},
        brandID: {type: String, required: true},

}, { timestamps: true, versionKey : false })

const  ProductModel = mongoose.model("Products", ProductSchema);

module.exports=ProductModel ;