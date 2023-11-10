import React, { useState, useEffect } from 'react';
import '../css/ConnectionStatus.css';

function ConnectionStatus() {
  const [emotionalStates, setEmotionalStates] = useState([]);

  useEffect(() => {
    // Simulating fetching emotional states from a data source
    // You should replace this with actual data fetching code
    const fetchData = async () => {
      try {
        // Replace this with your data fetching logic
        const response = await fetch('your-data-endpoint'); // Example: '/api/emotionalStates'
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEmotionalStates(data); // Update emotionalStates with the fetched data
      } catch (error) {
        console.error('Error fetching emotional states:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="connection-status">
      <h2>Connection Status</h2>
      <ul>
        {emotionalStates.map((lovedOne, index) => (
          <li key={index} className="loved-one-hint">
            <div className="hint">
              <p>Height: {lovedOne.height}</p>
              <p>Complexion: {lovedOne.complexion}</p>
              {/* Add more hints based on the loved one's profile */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConnectionStatus;
