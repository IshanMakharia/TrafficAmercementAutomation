const nodemailer = require("nodemailer");

const sendMail = async (req, res)=> {
    console.log(req);
    const email = req.email;
    console.log(email);
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.ETHREAL_USER,
            pass: process.env.ETHREAL_PASW
        },
      });

      let info = await transporter.sendMail({
        from: '"Ishan" <ishanmakharia123@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Payment Reciept", // Subject line
        text: "Successfully Paid The Fine", // plain text body
        html: "<b>PAID</b>", // html body
      });
      //res.json(info);
      console.log(info);
      return info;
}

module.exports = {sendMail}