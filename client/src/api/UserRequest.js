import axios from 'axios';
const API = axios.create({ baseURL: "http://43.204.19.23" })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const getUser = (userId) => API.get(`/user/${userId}`)

export const updateUser = (id, formData) => API.put(`/user/${id}`, formData)


export const updateUserAdmin = (id, formData) => API.put(`/admin/user/${id}`, formData)

export const getAllUser = () => API.get('/user')

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data)

export const unFollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data)

export const savePost = (postId, userId) => API.put(`/savepost/${postId}/${userId}`)

