import express from "express";
import { registerUser,loginUser } from "../Controllers/AuthController.js";

const router=express.Router()


// router.get('/',(req,res)=>{
//    res.send("auth route")
// })

router.post('/register',registerUser)
router.post('/login',loginUser)

export default router