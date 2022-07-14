// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import Blogmessage from '../modals/blog.js';

export const getBlogs = async (req,res) => {
    try{
        const blogmessages = await Blogmessage.find().sort({"_id" : -1});

        res.status(200).json(blogmessages);

    }catch (error){
        res.status(404).json({ message : error.message})
    }
}

export const createBlog = async (req,res) => {
    const blog = req.body;
    const newBlog = new Blogmessage({ ...blog, date : new Date().toLocaleString() });

    try{
        await newBlog.save();

        console.log(newBlog);
        res.status(201).json(newBlog);
    }catch(error){
        res.status(409).json({ message : error.message});
    }
}

export const updateBlog = async (req,res) => {
    const {id} = req.params;
    const blog = req.body;

    console.log("blog updated : " , blog);
    const updatedBlog = await Blogmessage.findByIdAndUpdate(id, { ...blog, id}, { new : true});

    console.log("returned value : " ,updatedBlog);
    res.json(updatedBlog);
}

export const findBlog = async (req,res) => {
    const { id } = req.params;
    const blog = await Blogmessage.findById(id);

    res.json(blog);
}

export const deleteBlog = async (req,res) => {
    const {id} = req.params;

    await Blogmessage.findByIdAndRemove(id);

    res.json({ message : 'Post deleted successfully'});
}
