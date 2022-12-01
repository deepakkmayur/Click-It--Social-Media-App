import express from "express" 
import {getUser, updateUser,deleteUser,followUser,UnfollowUser,getAllUser,blockUser} from '../Controllers/UserController.js'  

import authMiddleware    from "../Middleware/authMiddleware.js"


const router=express.Router()    


router.get('/',getAllUser)
router.get('/:id',getUser)   
router.put('/:id',authMiddleware,updateUser)
router.delete('/:id',authMiddleware,deleteUser)
router.put('/:id/follow',authMiddleware,followUser)
router.put('/:id/unfollow',authMiddleware,UnfollowUser)
router.put('/:userId/blockUser',authMiddleware,blockUser)


export default router