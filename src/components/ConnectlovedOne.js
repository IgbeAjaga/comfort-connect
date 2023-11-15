import React, { useState } from 'react';
import '../css/ConnectlovedOne.css';

function ConnectlovedOne({ onClose, onConnect }) {
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleConnect = async () => {
    // Perform any necessary validation here before connecting the loved one
    if (phone && firstName && lastName) {
      // Call a function (e.g., onConnect) to connect the loved one
      //onConnect({ phone, firstName, lastName });
      const loved = {
        "phone": phone,
        "first_name": firstName,
        "last_name": lastName
      }
      try {
        const respone = await fetch(
            "http://54.236.43.172:5000/api/person/connect_to/",
            {
              method: "POST",
              headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(loved)
            }
        );
        console.log(respone.status)
        if (!respone.ok) {
          alert("Didn't connect to the loved one! please try again...")
        }
        else
        {
          alert('Connected Successfully to the loved one!');
          onClose();
        }
      } catch (error) {
        alert("An error occured while connecting to the loved one");
      }
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
