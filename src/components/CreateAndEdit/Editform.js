import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, updateBlog } from '../../actions/blogs';
import { fetchBlogs } from '../../api';

const Editform = ({ id }) => {

    const [blogdata,setblogData] = useState({_id:'',
      title:'',
      author:'',
      description:'',
      date:'',
      content:'',
      __v:0
    });
    
    console.log("curblog from editform ", blogdata);
    
  const dispatch = useDispatch();

    const clear = () => {
        setblogData({_id:'',
        title:'',
        author:'',
        description:'',
        date:'',
        content:'',
        __v:0
      });
      }

      let maindata;
    
      const handleSubmit = e => {
        e.preventDefault();
    
        // blogdata.date = new Date().toLocaleString();
        setblogData({ ...blogdata, date : new Date().toLocaleString()})
        // console.log(blogdata);

        
        dispatch(updateBlog(id, { ...blogdata }));
    
        clear();
        window.location = '/';
      }

      useEffect(() => {
          const fetchBlogs = async () => {
            const res = await axios.get(`http://localhost:8000/blogs/${id}`);
            console.log("res form editform : ", res.data);
            maindata = res.data;
            setblogData({title:res.data.title,author:res.data.author,description:res.data.description,content:res.data.content,date:res.data.date, _id:res.data._id,__v : res.data.__v});
          }

          fetchBlogs();
          console.log("blogdata ", blogdata);
      },[])
      
  return (
    <div>
      <form className='my-3' onSubmit={handleSubmit}>
        <div className ="form-group">
          <label>Blog Title</label>
          <input type="text" required value={blogdata.title} className="form-control my-3" placeholder="Title" onChange={(e) => setblogData({...blogdata, title:e.target.value})} />

          <label>Author</label>
          <input type="text" required value={blogdata.author} className="form-control my-3" placeholder="Author" onChange={(e) => setblogData({...blogdata,author:e.target.value})} />

          <label>Description</label>
          <input type="text" required value={blogdata.description} className="form-control my-3" placeholder="Description" onChange={(e) => setblogData({...blogdata,description:e.target.value})} />
        </div>
    
        <div className ="form-group">
          <label>Blog</label>
          <textarea className ="form-control" required value={blogdata.content} rows="3" onChange={(e) => setblogData({...blogdata,content:e.target.value})}></textarea>
        </div>

        <div className="form-group my-3">
          <input type="submit" value="Update Blog" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default Editform