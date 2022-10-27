import UserModel from "../Modals/userModal.js";
import bcrypt from 'bcrypt'
import e from "express";



//get user from the database-----------------------------------------------------------------
 export const getUser= async (req,res)=>{
   console.log(req.params);
  const id=req.params.id


try {
  const user=await UserModel.findById(id)   
  if(user){
const {password,...otherDetails}=user._doc
// const {username,password,...otherDetails}=user._doc

     res.status(200).json(otherDetails)  

  }else{
   res.status(404).json("no user such user exist")
  }
   
} catch (error) {
   res.status(500).json(error)
}}



//update user,user and admin can edit-----------------------------------------------

export const updateUser=async (req,res)=>{         
 const id=req.params.id 

 const {currentUserId,currentUserAdminStatus,password}=req.body
 if(id===currentUserId||currentUserAdminStatus){

try {

   if(password){
      const salt=await bcrypt.genSalt(10)
      req.body.password= await bcrypt.hash(password,salt)
   }

   const user=await UserModel.findOneAndUpdate(id,req.body,{new:true})
   res.status(200).json(user)
} catch (error) {
   res.status(500).json(error)
}
 }else{
   res.status(403).json("Access denied! please try to edit yourown account details")
 }

}



//delete user-------------------------------------------------

export const deleteUser=async (req,res)=>{
   const id=req.params.id
    const {currentUserId,currentUserAdminStatus}=req.body
    console.log();
    if(currentUserId===id || currentUserAdminStatus){
      try {
         await UserModel.findByIdAndDelete(id)
         res.status(200).json("successufully deleted the user")
      } catch (error) {
         res.status(500).json(error)
      }
    }else{
   res.status(403).json("Access denied! please try to edit yourown account details")
      
    }
}






//follow a user----------------------------------------------------

export const followUser=async (req,res)=>{
const id=req.params.id
const {currentUserId}=req.body
//id=our followers id, currentUserId=our id

//following our own account is restricted
if(currentUserId===id){
res.status(403).json("action restricted")
}else{
try {


   const followUser=await UserModel.findById(id)
   
   const followingUser=await UserModel.findById(currentUserId)
if(!followUser.followers.includes(currentUserId)){
   //pushing our id into the follower's accouct
     await followUser.updateOne({$push:{followers:currentUserId}})
   //pushing follower's id to our accouct
     await followingUser.updateOne({$push:{following:id}})
     res.status(200).json("user followed")
}else{
   res.status(403).json("user is already followed by you")
}

} catch (error) {
   console.log(error);
   res.status(403).json("Access denied! please try to edit yourown account details")

}
}

}


//unfollow users-------------------------------------------------------------


export const UnfollowUser=async (req,res)=>{
   const id=req.params.id
   const {currentUserId}=req.body
   //id=our follower's id, currentUserId=our id
   
   //following our own account is restricted (not required)   
   if(currentUserId===id){
   res.status(403).json("action restricted")
   }else{
   try {
   
   
      const followUser=await UserModel.findById(id)
      
      const followingUser=await UserModel.findById(currentUserId)
      //  ! is removed from follow a user
   if(followUser.followers.includes(currentUserId)){
      //removing our id from the follower's accouct
        await followUser.updateOne({$pull:{followers:currentUserId}})
      //removing follower's id from our accouct
        await followingUser.updateOne({$pull:{following:id}})
        res.status(200).json("user Unfollowed")
   }else{
      res.status(403).json("user is not followed by you")
   }
   
   } catch (error) {
      console.log(error);
      res.status(403).json("Access denied! please try to edit yourown account details")
   
   }
   }
   
   }



// module.exports={getUser,}