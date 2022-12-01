import mongoose from "mongoose";



const commentSchema=new mongoose.Schema({
   text:{
      type:String,
      required:true
   },
   postId:{
   type:mongoose.SchemaTypes.ObjectId
   },
   userId:{
   type:mongoose.SchemaTypes.ObjectId
   }
},
{timestamps:true})


const CommentModel= mongoose.model("comments",commentSchema)

export default CommentModel