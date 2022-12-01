import express from "express";
import {createPost,getPost,updatePost,deletePost,likePost, getTimelinePost,postComment} from '../Controllers/PostController.js'





const router =express.Router()
  
router.post('/',createPost)
router.get('/:id',getPost)
// router.put('/:id',updatePost)
router.put('/:id',updatePost)
// router.delete('/:id/delete',deletePost)   
router.delete('/:id/:userId/delete',deletePost)   
router.put('/:id/like',likePost)
router.get('/:id/timeline',getTimelinePost)
router.post('/comment',postComment)



export default router