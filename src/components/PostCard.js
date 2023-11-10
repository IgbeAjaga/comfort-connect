import React from 'react';
import '../css/PostCard.css';

function PostCard({ image, title, content, children }) {
  return (
    <div className="postCard">
      <img className="postCard_thumbnail" src={image} alt="" />
      <div className="postCard_info">
        <div className="postCard_text">
          <h4>{title}</h4>
          <p>{content}</p>
          {children} {/* Added the children prop to include the "Read More" button */}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
