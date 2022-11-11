import axios from 'axios'

const API=axios.create({baseURL:"http://localhost:5000"})
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

export const getUser=(userId)=>API.get(`/user/${userId}`)

export const updateUser=(id,formData)=>{
return API.put(`/user/${id}`,formData)
}

export const getAllUser=()=>{
   return API.get('/user')
}

export const  followUser=(id,data)=>API.put(`/user/${id}/follow`,data)
export const unFollowUser=(id,data)=>API.put(`/user/${id}/unfollow`,data)
