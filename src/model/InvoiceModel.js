const mongoose = require('mongoose');


const InvoiceSchema = mongoose.Schema({
        userID : {type: String, required: true},
        payable: {type: Number, requiredL: true},
        cus_details: {type: String, required: true},
        ship_details: {type: String, required: true},
        tran_id : {type: String, required: true},
        user_id : {type: String, required: true},
        val_id : {type: String, required: true},
        payment_status : {type: String, required: true},
        delivery_status : {type: String, required: true},
        total : {type: String, required: true},
        vat : {type: String, required: true},

}, { timestamps: true, versionKey : false })

const InvoiceModel = mongoose.model("invoices", InvoiceSchema);

module.exports= InvoiceModel ;