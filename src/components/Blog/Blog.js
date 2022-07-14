import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {getBlogs} from '../../actions/blogs'

import './styles.css'

const Blog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const curdata = useSelector((state) => state.blogs);

    console.log("from blog component : " , curdata);


    const curblog = curdata.filter(blog => blog._id == id);
    const blog = { ...curblog[0] }
    
    console.log(blog);

    useEffect(() => {
      dispatch(getBlogs());
    },[dispatch])

  return (
    <div className='blogWrapper'>

    <div className = "card shadow p-3 mb-5 bg-body rounded mt-4">
                <div className="card-body">
                    <h5 className="card-title fs-1 text-capitalize mt-3 mb-3 border-bottom">{blog.title}</h5>
                    <h6 className="card-subtitle mb-2 mt-4 text-muted">author : {blog.author}</h6>
                    <h6 className="card-subtitle text-muted mb-5 border-bottom">{blog.date}</h6>
                    <p className="card-text mb-5">{blog.content}</p>
                    {/* <a href={`/blog/${blog._id}`} className="card-link">Read</a> */}
                    {/* <a href="#" className="card-link">Edit</a> */}
                    <div className='checksm'>
                      <a href={`/edit/${blog._id}`} className="card-link"><button type="button" class="btn btn-secondary">Edit</button></a>
                      <a href={`/home`} className="card-link"><button type="button" class="btn btn-success">Back</button></a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Blog
