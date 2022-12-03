import express from "express";
import { insertUser, updateUser } from "../models/user/UserModel.js";
const router = express.Router();

// create user router
router.post("/", async (req, res, next) => {
  try {
    // get the incomming data
    // call insertUser to insert into the database

    const user = await insertUser(req.body);
    console.log(user);

    if (user?._id) {
      return res.json({
        status: "success",
        message: "User create successfully, you may login now",
      });
    }
    res.json({
      status: "error",
      message: "Unable to create the user. Please try again!",
    });
  } catch (error) {
    console.log(error.message);
    if (error.message.includes("E11000 duplicate key error collection")) {
        
    error.code =200;
      error.message = "There is aleray another user exist with the same email, Pelase rest passowrd to use or use different email to register";
    }
    next(error);
  }
});

//login 

router.post("/", async(req, res, next )=>{
  try{
    const user = await updateUser(req.body);
    console.log(user);
  
  if (user?._id) {
    return res.json({
      status: "success",
      message: "you have access",
    });
  }
  res.json({
    status: "error",
    message: "Unable to access . Please try again!",
  });
} catch (error) {
  console.log(error.message);

}

});

export default router;