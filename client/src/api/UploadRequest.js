import axios from 'axios';


const API = axios.create({ baseURL: "http://43.204.19.23" })

export const uploadImage = (data) => API.post('/upload', data)

export const uploadPost = (data) => API.post('/post', data)