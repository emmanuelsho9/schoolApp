const express = require("express")
const UserMoniBag = require("./scheme_monogoes");
const sendMail = require("../email_otp/email_otp");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
//const Flutterwave = require('../node_modules/flutterwave-node-v3');
const Otp = require("./otp/otp_scheme");
//const Otp = require("flutterwave-node-v3/lib/rave.otps");
//const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);


///Register Users
// Register Users

const registerUser = async function (req, res) {

  const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

  try {
    const { name, email, password,  phoneNumber,typeRegister } = req.body;
    if (!name || !email || !password || !phoneNumber || !typeRegister) {
      throw new Error("Please provide all required inputs");
    } else {
      const userExist = await UserMoniBag.findOne({ email });

      if (!userExist) {
        sendMail(email, otp);
         const password_hash =await bcrypt.hash(password,10)
        const token = jwt.sign({ name, email, password, phoneNumber }, 'MoniBag');

        const createUser = await UserMoniBag.create({
          otp,
          token,
          email,
          name,
          password:password_hash,
          phoneNumber,
          typeRegister
        });

        res.send(createUser);
      } else {
        res.status(400).json({ error: "Email already exists" });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const sendOtp = async function (req, res) {
  const saltRounds = 10;

  const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
  try {
    const { email } = req.body;
    if (!email) {
      throw new Error("Please provide all required inputs");
    } else {
      const currentUser = await UserMoniBag.findOne({ email });
      if (!currentUser) {
        throw new Error("User not found");
      }
      const sentOtp = await Otp.create({
        otp,
        id: currentUser.id,
        token: currentUser.token
      });
      res.send(sentOtp);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const verifiedOtp = async function (req, res) {
  const saltRounds = 10;

  //const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
  try {
    const { email,entered_otp } = req.body;
    if (!email||!entered_otp) {
      throw new Error("Please provide all required inputs");
    } else {
      const currentUser = await UserMoniBag.findOne({ email });
      if (!currentUser) {
        throw new Error("User not found");
      }
      const sentOtp = await Otp.findOne({
        id: currentUser.id,
        otp:entered_otp,

      });
        if(entered_otp==sentOtp.otp){
          res.send(currentUser);

        }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

  ///verify Users

  const changePassword = async function (req, res) {
    ///const saltRounds = 10;

    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("Please provide all required inputs");
      } else {
        const currentUser = await UserMoniBag.findOne({ email });
        if (!currentUser) {
          throw new Error("User not found");
        }
        const password_hash =await bcrypt.hash(password,10)

        currentUser.password = password_hash ;
        const updatedUser = await currentUser.save();

        res.json({
          password:"password updated"
        });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  const verifyUser = async function (req, res) {
    const { email, otp } = req.body;
    const user = await UserMoniBag.findOne({email,otp});
    if (otp==user.otp) {
      // const isOtpValid = await bcrypt.compare(otp, user.otp);
      console.log(user.otp);

      user.email = email;
      user.verified = true;
      await user.save()
      res.json({
        email:user.email,
        token:user.token,
        id:user._id,
        verified:user.verified
      })


        res.send("Verification successful");


    } else {
      throw Error("User not found");
    }
  };





///Login Users
const loginUser = async function (req, res) {
  const { email, password } = req.body;
  const user = await UserMoniBag.findOne({ email });

  if (user) {
    const b_password = await bcrypt.compare(password, user.password);
    if (b_password) {
      res.json({
        email: user.email,
        token: user.token,
        name: user.name,
        id: user._id,
      });
    } else {
      res.status(400).json({ error: "Wrong password" });
    }
  } else {
    res.status(400).json({ error: "User not found" });
  }
};







///Get Users
const getAll = async function (req, res){
  const allUser = await UserMoniBag.find()
    res.send(allUser)
}


///GetOne One
const getOneUser = async function (req, res){
    const id = req.params.id
    const findOne = await UserMoniBag.findById(id)
    res.send(findOne)
}

module.exports ={
    registerUser,
    getAll,
    getOneUser,
    loginUser,
    verifyUser,
    sendOtp,
    verifiedOtp,
    changePassword,
}