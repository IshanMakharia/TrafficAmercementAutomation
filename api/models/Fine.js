const mongoose = require("mongoose")

const fineSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    ph:{
        type:Number,
        require:true
    },
    rule:{
        type:String,
        require:true
    },
    place:{
        type:String,
        require:true
    },
    paymentRef: {
        type:String,
        default:"Not Paid"
    },
    paymentLink: {
        type:String
    }
}, {timestamps: true});

module.exports = mongoose.model("Fine", fineSchema)