import React, { useState } from 'react';
import '../css/ConnectlovedOne.css';

function ConnectlovedOne({ onClose, onConnect }) {
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleConnect = () => {
    // Perform any necessary validation here before connecting the loved one
    if (phone && firstName && lastName) {
      // Call a function (e.g., onConnect) to connect the loved one
      onConnect({ phone, firstName, lastName });
    }
  };

  return (
    <div className="connect-loved-one">
      <div className="modal-content">
        <h2>Connect Loved One</h2>
        <label>Phone Number:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <button onClick={handleConnect}>Connect</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ConnectlovedOne;
