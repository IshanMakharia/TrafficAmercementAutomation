const router = require("express").Router();
const User = require("../models/User");

router.get('/all', async (req, res)=>{
    try{
        const post = await User.find({});
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;