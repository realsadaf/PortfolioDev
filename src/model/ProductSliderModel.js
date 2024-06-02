const mongoose = require('mongoose');


const  ProductSliderSchema = mongoose.Schema({
       
        title : {type: String, required: true},
        des : {type: String, required: true},
        price : {type: Number, required: true},
        img : {type: String, required: true},    
        productID: {type: String, required: true},
      

}, { timestamps: true, versionKey : false })

const  ProductSliderModel = mongoose.model("ProductSliders", ProductSliderSchema);

module.exports=ProductSliderModel ;