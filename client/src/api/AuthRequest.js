import axios from 'axios'
import { Default_Url } from "./Config"
const API = axios.create({ baseURL: Default_Url })


export const logIn = (formData) => API.post('/auth/login', formData)
export const signUp = (formData) => API.post('/auth/register', formData)




