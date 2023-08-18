import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import "./Addpet.css"

function Addpet() {
  const [petName, setPetName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
  };

  return (
    <div>
      <div><Navbar /></div>
      <div className="form-container">
        <h1>Give them a home</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Pet Name</label>
            <input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Age</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Browse</label>
            <input type="file" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Addpet;