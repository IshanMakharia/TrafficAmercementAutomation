const router = require("express").Router();
const Fine = require("../models/Fine");
const User = require("../models/User");
const {createlink, fetchlinkId} = require('./paymentController');



//create 
router.post('/add', async (req, res)=>{


    const data = await createlink(req);
    //console.log(data);
    //var payid = data.id;
    //console.log(payid);
    req.body.paymentLink = data.id;
    req.body.paymentRef = data.status
    const newFine = new Fine(req.body);
    try{
        const saveFine = await newFine.save();
        //console.log(saveFine);
        res.status(200).json("Data received");
    } catch(err) {
        res.status(500).json(err);
    }
});

//get
router.get("/all", async (req, res)=>{

    
    try {
        const datatoupdate = await Fine.find({});
        for (let i = 0; i < datatoupdate.length; i++) {
            //console.log(datatoupdate[i].paymentLink);
            const paymentData = await fetchlinkId(datatoupdate[i].paymentLink);
            //console.log(paymentData);
            var updatedStatus = await paymentData.status;
            //console.log(updatedStatus);
            if(updatedStatus !== datatoupdate[i].paymentRef) {
                await Fine.updateOne({_id: datatoupdate[i]._id}, { $set: { paymentRef: updatedStatus }});
            }
            if(updatedStatus === "paid") {
                //console.log(datatoupdate[i]._doc);
                const updatedData = await Fine.findById(datatoupdate[i]._id)
                const {_id, ...other} = updatedData._doc;
                //console.log(other);
                const newUser = new User(other);
                const saveUser = await newUser.save();
                await Fine.findByIdAndDelete(datatoupdate[i]._id);
            }
        }
        const post = await Fine.find({});
        //console.log(post)
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
});
  


module.exports = router