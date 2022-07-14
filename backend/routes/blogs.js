// const express = require('express');
import express from 'express';
import { getBlogs, createBlog, updateBlog, deleteBlog, findBlog } from '../controllers/blogs.js';

const router = express.Router();

router.get('/check', (req,res) => {
    console.log("checkjdslkfjldfj")
    res.send('check is working')
})

router.get('/',getBlogs);
router.post('/',createBlog);
router.patch('/:id',updateBlog);
router.delete('/:id',deleteBlog);
router.get('/:id',findBlog)

export default router;