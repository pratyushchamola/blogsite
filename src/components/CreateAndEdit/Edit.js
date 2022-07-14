import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getBlogs, updateBlog } from '../../actions/blogs';
import Editform from './Editform';

const Edit = () => {
  // const curdata = useSelector(state => state.blogs);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
    
  },[dispatch])

  return (
    <div>
        {/* {curdata ? (<Editform id = {id} />) : <div>Loading...</div>} */}
        <Editform id = {id} />
    </div>
  )
}

export default Edit

