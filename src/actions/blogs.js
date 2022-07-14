import { FETCH_ALL,DELETE,CREATE,UPDATE } from '../constants/actionTypes'
import * as api from '../api'

export const getBlogs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogs();
        dispatch({ type:FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const createBlog = (blog) => async(dispatch) => {
    try {
        const { data } = await api.createBlog(blog);
        dispatch({ type: CREATE, payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBlog = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateBlog(id,post);

        console.log("data by update : ",data);

        dispatch({ type: UPDATE, payload : data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteBlog = (id) => async (dispatch) => {
    try {
        await api.deleteBlog(id);

        // console.log("this works herere");
        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error.message);
    }
}