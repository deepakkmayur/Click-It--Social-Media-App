import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" })


export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`)


export const likePost = (id, userId) => API.put(`/post/${id}/like`, { userId: userId })




export const deletePost = (postId, userId) => API.delete(`/post/${postId}/${userId}/delete`)

export const postComment = (comment) => API.post(`/post/comment`,comment)
// export const postComment = (comment) => console.log(comment,"comment-----");




