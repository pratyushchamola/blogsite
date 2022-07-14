import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import blogRoutes from './routes/blogs.js'


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}));
app.use(cors());

// app.use('/', (req,res) => {
//     console.log("hello");
//     res.send(`hello , it's workin`);
// })

// app.use('/hello', (req,res) => {
//     res.send('hello');
// })

app.use('/blogs',blogRoutes);

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,() =>console.log(`Server is running on port: ${PORT}`)))
.catch((error)=> console.log(error.message) );

// mongoose.set('useFindAndModify', false);
