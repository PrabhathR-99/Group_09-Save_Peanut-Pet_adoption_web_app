import React, { useState } from 'react';
import './SocialMediaPost.css'; // Make sure to create this CSS file for styling

function SocialMediaPost() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="social-media-post">
      <div className="post-header">
        <div className="profile-picture">
          {/* Profile picture image */}
        </div>
        <div className="owner-details">
          <span>Owner's Name</span>
          <button className="cross-icon">&#x2716;</button>
        </div>
      </div>
      <hr className="post-divider" />
      <div className="post-content">
        <div className="post-photo">
          {/* Photo image */}
        </div>
        <div className="post-details">
          <p>Name: Amelia</p>
          <p>Age: 3</p>
          <p>Gender: Male</p>
          <a href="#">Location</a>
        </div>
      </div>
      <hr className="post-divider" />
      <div className="post-footer">
        <button
          className={`like-icon ${isLiked ? 'liked' : ''}`}
          onClick={handleLikeClick}
        >
          &#x2661;
        </button>
      </div>
    </div>
  );
}

export default SocialMediaPost;
