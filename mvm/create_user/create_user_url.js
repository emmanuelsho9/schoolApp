const express = require("express");
const { changePassword,registerUser,getAll,getOneUser,loginUser,verifyUser,sendOtp,verifiedOtp } = require("./create_user_controller");
const bearToken = require("../middle_ware/bearer_token");



const registerUsers = express.Router();


registerUsers.post("/register",registerUser).get("/register",bearToken, getAll)
registerUsers.get("/register/:id",bearToken,getOneUser)
registerUsers.post("/login",loginUser)
registerUsers.post("/verifyuser",verifyUser)
registerUsers.post("/send_otp",sendOtp).post("/verify_otp",verifiedOtp).post("/change_password",changePassword)

module.exports=registerUsers;