import axios from 'axios'
import { Default_Url } from './Config';


const API = axios.create({ baseURL: Default_Url });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);