import axios from 'axios';
const API = axios.create({ baseURL: "http://43.204.19.23" })

export const getMessages = (id) => API.get(`/message/${id}`)
export const addMessage = (data) => API.post('/message', data)