import React from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import CreateAndEdit from './components/CreateAndEdit/CreateAndEdit';

import 'bootstrap/dist/css/bootstrap.min.css'
import Blog from './components/Blog/Blog';
import Edit from './components/CreateAndEdit/Edit';
import { updateBlog } from './actions/blogs';
import Intro from './components/Intro/Intro';


function App() {

  return (
    <div className='container'>
        <Navbar />
          <Router>
            <Routes>
              <Route path="/" element = {<Intro />} />
              <Route path="/home" element={<Home />} />
              <Route path='/new' element={<CreateAndEdit />} />
              <Route path='/blog/:id' element={<Blog />} />
              <Route path='/edit/:id' element={<Edit />} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
