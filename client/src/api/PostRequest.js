import axios from 'axios'

const API=axios.create({baseURL:"http://localhost:5000"})

 
export const getTimelinePosts=(id)=>API.get(`/post/${id}/timeline`)    


export const likePost=(id,userId)=>API.put(`/post/${id}/like`,{userId:userId})  


// export const deletePost=(postId,postData)=>API.delete(`/post/${postId}/delete`,postData)


export const deletePost=(postId,userId)=>API.delete(`/post/${postId}/${userId}/delete`)
// export const deletePost=(postId,postData)=>{console.log("///.././",postId,postData,"postId,postData")}


          

