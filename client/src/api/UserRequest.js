import axios from 'axios'
import { Default_Url } from './Config';

const API = axios.create({ baseURL: Default_Url })
// API.interceptors.request.use((req)=>{
//    if(localStorage.getItem('profile')){
//       req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile').token)}`
//    }
//    return req
// })
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const getUser = (userId) => API.get(`/user/${userId}`)

export const updateUser = (id, formData) => { return API.put(`/user/${id}`, formData) }

export const getAllUser = () => { return API.get('/user') }

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data)
export const unFollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data)

export const blockUser = (userId) => API.put(`/user/${userId}/blockUser`)
