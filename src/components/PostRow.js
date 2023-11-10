import React from 'react'
import '../css/PostRow.css';

function PostRow({content, title, image}) {
  return (
    <div className='postRow'>
        <img src={image} alt='' />
        <div className='postRow_text'>
        <h3>{title}</h3>
        <p className='postRow_headline'>
            {content}. {''}
            
            </p>
    </div>

    </div>
  )
}

export default PostRow
