import axios from 'axios';
const API = axios.create({ baseURL: "http://43.204.19.23" })


export const userChats = (id) => API.get(`/chat/${id}`)
export const chatRequest=(data)=>API.post('/chat',data)