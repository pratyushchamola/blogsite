import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs,deleteBlog } from '../../actions/blogs'
// import Example from '../example';
// import { deleteBlog } from '../../api';

import './styles.css'

const Home = () => {
    const curdata = useSelector((state) => state.blogs);
    const dispatch = useDispatch();


    const handleDelete = id => {
        console.log(id);

        dispatch(deleteBlog(id));
    }

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch])

  return (
      <div className="homewrapper">
        {/* <div className="card-columns" style= {{ border : '2px solid red' }}> */}
            <div className="row">
            {curdata.map(blog => (
                <div className='col-md-12 col-lg-6'>
                    <div key={blog._id} className = "card bounceEffect  shadow p-3 mb-5 bg-body rounded" style = { { margin : '2rem'}}>
                        <div className="card-body">
                            <h5 className="card-title mt-3 mb-3 border-bottom fs-4" style = {{ textDecoration : 'none' }}>{blog.title.toUpperCase()}</h5>
                            <h6 className="card-subtitle mb-2 text-muted text-capitalize">author : {blog.author}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">{blog.date.toLocaleString()}</h6>
                            <p className="card-text">{blog.description}</p>
                            <div className='marginForsm'>
                                <a href={`/blog/${blog._id}`} className="card-link"><button type="button" class="btn btn-primary mx-0">Read</button></a>
                                <a href={`/edit/${blog._id}`} className="card-link"><button type="button" class="btn btn-secondary mx-0">Edit</button></a>
                                <button className='btn btn-danger mx-3' onClick={() => dispatch(deleteBlog(blog._id))}>Delete</button>
                                {/* <Example /> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        {/* </div> */}
      </div>
  )
}

export default Home





// .homewrapper{
//     margin: 3rem;
//     border: 2px solid orange;
//     /* text-align : center; */
//     font-size: larger;
// }

// .blogcontainer{
//     border : 2px solid blue;
//     margin : 3rem;
// }

// .blogtitle{
//     margin-top: 2rem;
//     margin-bottom: 2rem;
//     text-align: center;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     text-decoration: underline;
// }

// .authanddate{
//     border : 2px solid yellow;
//     display : flex;
//     flex-direction: column;
//     align-items: flex-end;
// }