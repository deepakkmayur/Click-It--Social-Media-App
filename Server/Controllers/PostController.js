
import PostModal from "../Modals/postModal.js";
import mongoose from "mongoose";



//create newpost

export const createPost=async (req,res)=>{
   const newPost=new PostModal(req.body)

   try {
      await newPost.save()
      res.status(200).json("post created")
   } catch (error) {
      console.log(error);

     res.status(500).json(error) 
   }
}

//get a post

export const getPost=async (req,res)=>{
    const id=req.params.id

    try {
     const post=await PostModal.findById(id) 

     res.status(200).json(post)
    } catch (error) {
      console.log(error);

      res.status(500).json(error)                        
    }
}


//update a post

export const updatePost=async (req,res)=>{
   const postId=req.params.id
   const {userId}=req.body

   try {
      const post=await PostModal.findById(postId)
      if(post.userId===userId){
         await post.updateOne({$set:req.body})   
         res.status(200).json("post updated")
      }else{
         res.status(403).json("action forbidden")
      }
   } catch (error) {
      console.log(error);

      res.status(500).json(error)       
   }
}


//delete a post

export const deletePost=async (req,res)=>{
   const postId=req.params.id
   // console.log(postId,"/////postId////");
   const {userId} =req.body
   // console.log(userId,"////userId/////");

try {
   const post=await PostModal.findById(postId) 

   // console.log(req.body,"////req.body/////");
   // console.log(post,"...post...");
   
   if(post?.userId===userId){
      await post.deleteOne()
      res.status(200).json("post deleted successufully")               
   }else{
      // console.log("....................22");

      res.status(403).json("action forbidden")
   }
} catch (error) {
   // console.log("....................33");
console.log(error);
  res.status(500).json(error) 
}
}
    



//like and dislike post

export const likePost=async (req,res)=>{
   const id=req.params.id
   const {userId}=req.body
    try {
      const post=await PostModal.findById()        
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }

}



