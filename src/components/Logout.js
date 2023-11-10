import React from 'react';
import '../css/Logout.css'; // Import the corresponding CSS file

function Logout() {
  // Implement your logout logic here

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button className="logout-button">Logout</button>
    </div>
  );
}

export default Logout;
