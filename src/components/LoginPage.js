import React from 'react';
import '../css/Login.css'; // Import the corresponding CSS file

function Logout({ onConfirm, onCancel }) {
  // Implement your logout logic here

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <div className="buttons-container">
        <button className="logout-button" onClick={onConfirm}>
          Logout
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Logout;
