import axios from 'axios'

const API = axios.create({ baseURL : 'http://localhost:8000'});


export const fetchBlogs = () => API.get('/blogs');
export const createBlog = (newBlog) => API.post('/blogs',newBlog);
export const updateBlog = (id, updatedBlog) => API.patch(`/blogs/${id}`, updatedBlog);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);