import axios from 'axios';
const API = axios.create({ baseURL: "http://43.204.19.23" })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const getTimelinePostsUser = (userId) => API.get(`/post/${userId}/usertimeline`)
export const likePost = (id, userId) => API.put(`/post/${id}/like`, { userId: userId })
export const getAllPost = () => API.get('/posts')
export const deletePost = (id, userId) => API.put(`/post/${id}/${userId}/delete`)
export const getPost = (postId, data) => API.get(`/savedpost/${postId}/save`)
