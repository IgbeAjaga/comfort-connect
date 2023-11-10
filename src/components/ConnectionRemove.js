import React, { useState } from 'react';
import '../css/ConnectionRemove.css';

function ConnectionRemove() {
  const [lovedOnes, setLovedOnes] = useState([
    //dummy data, please replace with appropriate remove logic
    { phone: '+234816673244', firstname: 'Igbe', lastname: 'Ajaga' },
    { phone: '+234816673344', firstname: 'Favour', lastname: 'Oche' },
    { phone: '+234817673244', firstname: 'David', lastname: 'Enyi' },
    { phone: '+234816673244', firstname: 'Ade', lastname: 'Aliyu' },
  ]);

  const [successMessage, setSuccessMessage] = useState('');
  const [selectedLovedOne, setSelectedLovedOne] = useState(null);

  const removeLovedOne = (phone) => {
    const newLovedOnes = lovedOnes.filter((lovedOne) => lovedOne.phone !== phone);
    setLovedOnes(newLovedOnes);
    setSuccessMessage('Loved one removed successfully.');
    setSelectedLovedOne(null);
  };

  const closePopup = () => {
    setSelectedLovedOne(null);
  };

  return (
    <div className="connection-remove">
      {selectedLovedOne ? (
        <div className="popup">
          <h2>Remove Connection</h2>
          <p>
            Are you sure you want to remove{' '}
            {selectedLovedOne.firstname} {selectedLovedOne.lastname}?
          </p>
          <button onClick={() => removeLovedOne(selectedLovedOne.phone)}>
            Confirm
          </button>
          <button onClick={closePopup}>Cancel</button>
          
        </div>
      ) : null}
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
      <ul>
        {lovedOnes.map((lovedOne) => (
          <li key={lovedOne.phone}>
            {lovedOne.firstname} {lovedOne.lastname}
            <span
              onClick={() => setSelectedLovedOne(lovedOne)}
              className="remove-button"
            >
              Remove
            </span>
          </li>
        ))}
      </ul>
      
    </div>
    
  );
}

export default ConnectionRemove;
