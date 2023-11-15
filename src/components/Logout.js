import React from 'react';
import '../css/Logout.css'; // Import the corresponding CSS file
import {useNavigate} from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  // Implement your logout logic here
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button className="logout-button" onClick={logout}>Logout</button>
    </div>
  );
}

export default Logout;
