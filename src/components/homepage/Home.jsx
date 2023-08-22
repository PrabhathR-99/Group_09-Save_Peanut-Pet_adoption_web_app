import React from 'react';
import Navbar from '../navbar/Navbar';
import './Home.css'; // Make sure to create this CSS file for styling
import Cover from "./assests/cover01.png"
import Cover2 from "./assests/cover02.png"
import SocialMediaPost from '../socialmediapost/SocialMediaPost';
import Footer from './footerp/Footer';

function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div className="home-container">
        <div className="image-container">
          <img alt='save peanut logo' className="logo" src={Cover} />
          <div className="buttons-container">
            <button className="button-outline">Find a Pet</button>
            <button className="button-outline">Add Pet</button>
          </div>
        </div>
      </div>

      <div className="home-container2">
        <div className="image-container2">
          <img alt='save peanut logo' className="logo" src={Cover2} />

        </div>
      </div>
      <div postsco>
        <div className="post-container">
          <SocialMediaPost />
          <SocialMediaPost />
        </div>
        <div className="post-container">
          <SocialMediaPost />
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default Home;
