import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import './Home.css'; // Make sure to create this CSS file for styling
import Cover from "./assests/cover01.png"
import Cover2 from "./assests/cover02.png"
import SocialMediaPost from '../socialmediapost/SocialMediaPost';
import Footer from './footerp/Footer';
import { useStore } from '../../store';
import { getAllPets } from '../../api/pet';

function Home() {

  const { pets, setPets } = useStore(state => state);

  const fetchPets = async () => {
    try {
      const res = await getAllPets();
      console.log(res);
      setPets(res.data);
    } catch (error) {
      console.error('Error fetching pets', error);
    }
  }

  useEffect(() => {
    fetchPets();
  }, []);

  useEffect(() => {
    console.log(pets);
  }, [pets]);

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
        <div social-media-feed>
          <div className="post-container">
            <SocialMediaPost
              ownerName={"Prabhath"}
              petName={"Peanut"}
              age={"2"}
              gender={'male'}
              location={'Colombo'}
            />
            <SocialMediaPost
              ownerName={"Rathnayake"}
              petName={"Tommy"}
              age={"8"}
              gender={'male'}
              location={'Colombo'}
            />
            <SocialMediaPost
              ownerName={"Anjana"}
              petName={"Bula"}
              age={"12"}
              gender={'male'}
              location={'Colombo'}
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default Home;
