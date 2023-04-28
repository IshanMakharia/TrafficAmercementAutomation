const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
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
        require:true
    },
    paymentLink: {
        type:String
    }
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema)