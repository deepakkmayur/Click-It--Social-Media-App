
import PostModal from "../Modals/postModal.js";
import mongoose from "mongoose";

import UserModel from "../Modals/userModal.js";



//create newpost

export const createPost=async (req,res)=>{
   console.log("//////",req.body,"req body create post");
   
   const newPost=new PostModal(req.body)

   try {
      await newPost.save()
      res.status(200).json(newPost)
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
   // console.log("here");
   // console.log(req.body.id,"eeeee");
   // console.log("last");

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
 
   // const postId=req.params.id
   // const {userId} =req.body

   const postId=req.params.id
   
   const userId =req.params.userId

try {
   const post=await PostModal.findById(postId) 
 
   if(post?.userId===userId){
      const response = await post.deleteOne()
      res.status(200).json({message:"post deleted successufully", response})               
   }else{
   
      res.status(403).json("action forbidden")
   }
} catch (error) {
console.log(error);
  res.status(500).json(error) 
}
}
    



//like and dislike post

export const likePost=async (req,res)=>{
   const postId=req.params.id
   const {userId}=req.body
    try {
      const post=await PostModal.findById(postId)    

      if(!post.likes.includes(userId)){
         await post.updateOne({$push:{likes:userId}})
         res.status(200).json("post liked")
      }else{
         await post.updateOne({$pull:{likes:userId}})
         res.status(200).json("post disliked")
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }

}


//get timeline post or get our follower's post

export const getTimelinePost=async (req,res)=>{
   const userId=req.params.id
   try {
      const currentUserPosts=await PostModal.find({userId:userId})
       const followingUsersPosts=await UserModel.aggregate(
         [
         {
            $match:{
               _id:new mongoose.Types.ObjectId(userId)
            },
         },
         {
            $lookup:{
               from:'posts',
               localField:"following",
               foreignField:"userId",
               as:"followingPosts"
            }
         },{
            $project:{
               followingPosts:1,      
               _id:0  
            }
         }
       ])

     

       res.status(200).json(currentUserPosts.concat(...followingUsersPosts[0].followingPosts).sort((a,b)=>{
         return b.createdAt-a.createdAt
       })
       )
   } catch (error) {
      console.log(error);
   }

}



//add comment

export const postComment=async (req,res)=>{
const postId=req.params.postId
const userId=req.params.userId
console.log(req.body,"req.body");
console.log(postId,userId,"post nd user ID");
}

