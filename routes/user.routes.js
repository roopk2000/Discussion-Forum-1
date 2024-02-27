const express=require("express");
const app=express();
const router=express.Router();
const model=require("../models/user.models");
const {createUser, getUserByUsername, getAllUsers}=require("../controllers/user.constroller")
const { checkApiKey}=require("../validations/user.validations")

router.post("/user/register",createUser )


router.get("/user/all", checkApiKey, getAllUsers)


router.get("/user/:username", getUserByUsername)


module.exports=router;