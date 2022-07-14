import React from 'react'

import blog1 from '../../images/blog.jpg'
import './styles.css'

const Intro = () => {
  return (
    <div className='introWrapper'>
        <div className='textDiv'>
            <h2>Blog App</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <a href='/home' style={ { textDecoration : 'none' }}><button type="button" class="btn btn-primary">Read Blogs</button></a>
        </div>
        <div className='photoDiv'>
            {/* <img src = {blog1} alt="blogs_" /> */}
        </div>

    </div>
  )
}

export default Intro