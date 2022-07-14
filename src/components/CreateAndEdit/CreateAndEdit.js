import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../../actions/blogs';

const CreateAndEdit = () => {
    const [blogdata,setblogData] = useState({title:'',author:'',description:'',date:'',content : ''});
    const dispatch = useDispatch();

    const clear = () => {
      setblogData({title:'',author:'',description:'',date:'',content : ''});
    }

    const handleSubmit = e => {
      e.preventDefault();

      blogdata.date = new Date().toLocaleString();
      console.log(blogdata);
      
      dispatch(createBlog({ ...blogdata }));

      clear();
      window.location = '/';
    }

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
          <input type="submit" value="Create Blog" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateAndEdit