import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import "./Addpet.css"
import { createPet } from '../../api/pet';

function Addpet() {

  const [pet, setPet] = useState({
    petName: "",
    age: "",
    phoneNumber: "",
    location: "",
    image: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(pet);
    const res = await createPet(pet);
    console.log(res);
  };

  return (
    <div>
      <div><Navbar /></div>
      <div className="form-container">
        <h1 className='formHeader'>Give them a home</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Pet Name</label>
            <input
              type="text"
              value={pet.petName}
              onChange={(e) => setPet({
                ...pet,
                petName: e.target.value
              })
              }
              required
            />
          </div>
          <div className="form-field">
            <label>Age</label>
            <input
              type="text"
              value={pet.age}
              onChange={(e) => setPet({
                ...pet,
                age: e.target.value
              })}
              required
            />
          </div>
          <div className="form-field">
            <label>Phone Number</label>
            <input
              type="text"
              value={pet.phoneNumbe}
              onChange={(e) => setPet({
                ...pet,
                phoneNumber: e.target.value
              })}
              required
            />
          </div>
          <div className="form-field">
            <label>Location</label>
            <input
              type="text"
              value={pet.location}
              onChange={(e) => setPet({
                ...pet,
                location: e.target.value
              })}
              required
            />
          </div>
          <div className="form-field">
            <label>Browse</label>
            <input type="file" />
          </div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Addpet;