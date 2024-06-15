import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container success-container">
      <h1>Form Submitted Successfully!</h1>
      <div>
        <p><strong>First Name:</strong> {state.firstName}</p>
        <p><strong>Last Name:</strong> {state.lastName}</p>
        <p><strong>Username:</strong> {state.username}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Phone No:</strong> {state.phoneNo}</p>
        <p><strong>Country:</strong> {state.country}</p>
        <p><strong>City:</strong> {state.city}</p>
        <p><strong>PAN No:</strong> {state.panNo}</p>
        <p><strong>Aadhar No:</strong> {state.aadharNo}</p>
      </div>
      <button onClick={() => navigate('/')}>Back to Form</button>
    </div>
  );
};

export default Success;
