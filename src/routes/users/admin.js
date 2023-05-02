import express from "express";


import verifyAdmin from "../../middleware/verifyAdmin.js";


export const adminRouter = express.Router();


adminRouter.post("/",(req,res)=>{
    res.status(200).send("Admin unverified");
})


//Endpoint level middleware
adminRouter.delete("/",verifyAdmin,(req,res)=>{
    res.status(200).send("Admin Verified");
})
