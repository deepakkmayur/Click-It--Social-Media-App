import express from "express";
const router=express.Router()

import multer from "multer"; 

const storage=multer.diskStorage({
   destination:(req,file,cb)=>{
      cb(null,"public/images")
   },
   filename:(req,file,cb)=>{
      cb(null,req.body.name)
   }
})


const upload=multer({storage:storage})

router.post('/',upload.single("file",(req,res)=>{
   try {
      return res.status(200).json("file uploaded successfully")
   } catch (error) {
      console.log(error);
   }
}))

export default router