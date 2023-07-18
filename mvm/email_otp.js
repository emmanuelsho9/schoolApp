const nodemailer = require("nodemailer");


const getOtp= async function (){
}
  

const sendMail = async function ({otp, email}){
    
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "461b9d251294a1",
          pass: "7b7686a76f61ed"
        }
      });

        // send mail with defined transport object
        const info = await transport.sendMail({
            from: 'info@monibag.com', // sender address
            to: email, // list of receivers
            subject: "OTP Verification ✔", // Subject line
            text: "Verify your email with this OTP?", // plain text body 
// Replace the `\$otp` placeholder with the actual OTP
 html : `<head>  <title>OTP Verification</title></head><body> <h1>OTP Verification</h1><p>Your OTP is: <b>${otp}</b></p><p>Please enter your OTP to verify your account.</p></body>`
      });
          
}

module.exports = sendMail;