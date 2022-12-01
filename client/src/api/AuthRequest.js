import axios from 'axios';
const API = axios.create({ baseURL: "http://43.204.19.23" })

export const logIn = (formData) => API.post('/auth/login', formData)
export const signUp = (formData) => API.post('/auth/register', formData)