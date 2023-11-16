const express=require("express");
const router=express.Router();

const {createEmployeeData}=require("../controllers/createEmployeeData");

router.post("/create",createEmployeeData);
module.exports=router;