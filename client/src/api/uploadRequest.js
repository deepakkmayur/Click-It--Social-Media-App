import axios from 'axios'
import { Default_Url } from './Config'

const API=axios.create({baseURL:Default_Url})
export const uploadImage=(data)=>{
   API.post('/upload/',data)

}

export const uploadPost=(data)=>API.post('/post',data)            