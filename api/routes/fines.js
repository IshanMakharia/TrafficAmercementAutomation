const router = require("express").Router();
const Fine = require("../models/Fine");
const User = require("../models/User");
const {createlink, fetchlinkId} = require('./paymentController');
const {sendMail} = require('./mailController');


//create 
router.post('/add', async (req, res)=>{
    const data = await createlink(req);
    req.body.paymentLink = data.id;
    req.body.paymentRef = data.status
    const newFine = new Fine(req.body);
    try{
        const saveFine = await newFine.save();
        res.status(200).json("Data received");
    } catch(err) {
        res.status(500).json(err);
    }
});



//get
router.get("/all", async (req, res)=>{
    try {
        const post = await Fine.find({});
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
});


//update
router.get("/updateAll", async (req, res)=>{
    try {
        const datatoupdate = await Fine.find({});
        for (let i = 0; i < datatoupdate.length; i++) {
            const paymentData = await fetchlinkId(datatoupdate[i].paymentLink);
            var updatedStatus = await paymentData.status;
            // const updated = await Fine.findById(datatoupdate[i]._id)
            //     console.log(updated);
            if(updatedStatus !== datatoupdate[i].paymentRef) {
                await Fine.updateOne({_id: datatoupdate[i]._id}, { $set: { paymentRef: updatedStatus }});
            }
            if(updatedStatus === "paid") {
                const updatedData = await Fine.findById(datatoupdate[i]._id)
                // console.log(updatedData);
                const info = sendMail(updatedData);
                // console.log(info.messageId)
                const {_id, ...other} = updatedData._doc;
                const newUser = new User(other);
                const saveUser = await newUser.save();
                await Fine.findByIdAndDelete(datatoupdate[i]._id);
            }
        }
        const post = await Fine.find({});
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
});

//search
router.get("/mysearch", async (req, res) => {
    try {
        const { q } = req.query;
        var users1;
        var users2;
        users1 = await Fine.find({email: {$regex: q}});
        users2 = await User.find({email: {$regex: q}});
        // if(isNaN(q)) {
        //     users1 = await Fine.find({email: {$regex: q}});
        //     users2 = await User.find({email: {$regex: q}});
        // } else if(!isNaN(q)){
        //     const n = parseInt(q);
        //     users1 = await Fine.find({ph: n});
        //     users2 = await User.find({ph: n});
        // }
        const users = users1.concat(users2);
        res.status(200).json(users);
    } catch(err) {
        console.log(err);
    } 
    
});


module.exports = router