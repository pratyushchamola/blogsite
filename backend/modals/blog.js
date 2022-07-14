// const mongoose = require('mongoose')
import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title : String,
    author : String,
    description: String,
    date: {
      type : String,
      default : new Date().toLocaleString()  
    },
    content: String
})

const Blogmessage = mongoose.model('Blogmessage', blogSchema);

export default Blogmessage
// module.exports = Blogmessage