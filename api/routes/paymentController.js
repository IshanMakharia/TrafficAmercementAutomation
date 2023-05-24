const Razorpay = require('razorpay');


const createlink = async (req, res)=> {
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY,
        key_secret: process.env.RAZORPAY_SECRET,
    });
    const name = req.body.name;
    const ph = req.body.ph;
    const email = req.body.email;
    const rule  = req.body.rule;
    const desc = "Fine for violating Traffic Rule "+rule+" near "+req.body.place;
    
    try{
    const link = await instance.paymentLink.create({
        amount: 400,
        currency: "INR",
        description: desc,
        customer: {
            name: name,
            email: email,
            contact: ph
        },
        notify: {
            sms: true,
            email: true
        },
        //   reminder_enable: true,
        notes: {
            rule_violated: rule
        },
        //callback_url: "https://example-callback-url.com/",
        //callback_method: "get"
    });
    //console.log(link);
    //console.log(link.id);
    const data = link;
    return data;
    } catch(err) {
        console.log(err);
    }
}



const fetchlinkId = async (req, res)=> {
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY,
        key_secret: process.env.RAZORPAY_SECRET,
    });

    //console.log(req);
    try{
    const link = await instance.paymentLink.fetch(req)
    //console.log(link);
    //console.log(link.id);
    const data = link;
    return data;
    } catch(err) {
        console.log(err);
    }
}


module.exports = {createlink, fetchlinkId}
