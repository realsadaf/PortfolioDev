const mongoose = require('mongoose');


const CartSchema = mongoose.Schema({
        productID : {type: String, required: true},
        userID : {type: String, required: true},
        color: {type: String, required: true},
        price: {type: Number, required: true},
        qty: {type: Number, required: true},
        size : {type: String, required: true},


}, { timestamps: true, versionKey : false})

const CartModel = mongoose.model("carts", CartSchema);

module.exports= CartModel ;