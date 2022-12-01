import mongoose from "mongoose";

const AdminSchema=new mongoose.Schema({

   username:{
      type:String,
      required:true
   },
   password:{
      type:String,
      required:true
   }     

},{timestamps:true})


const AdminModel=mongoose.model("admin",AdminSchema)

export default AdminModel