import axios from 'axios'
import { Default_Url } from './Config';


const API = axios.create({ baseURL: Default_Url });

export const createChat = (userId,personId) => API.post('/chat/', {userId,personId});

export const userChats = (id) => API.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);                           