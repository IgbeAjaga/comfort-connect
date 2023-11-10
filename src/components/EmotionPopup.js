import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/EmotionPopup.css';

const responses = [
  'Happy',
  'Very Happy',
  'Extremely Happy',
  'Sad',
  'Very Sad',
  'Extremely Sad',
  'I Don\'t Know',
];

function EmotionPopup({ isOpen, onClose, onSubmit }) {
  const [selectedResponse, setSelectedResponse] = useState('');

  const handleResponseChange = (event) => {
    setSelectedResponse(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedResponse) {
      onSubmit(selectedResponse);
    }
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '400px',
      padding: '20px',
      borderRadius: '10px',
      border: 'none',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Emotion Question"
      style={customStyles}
    >
      <h2>How are you genuinely feeling currently?</h2>
      <form>
        {responses.map((response, index) => (
          <div key={index} className="response-option">
            <input
              type="radio"
              id={`response${index}`}
              name="emotionResponse"
              value={response}
              checked={selectedResponse === response}
              onChange={handleResponseChange}
            />
            <label htmlFor={`response${index}`}>{response}</label>
          </div>
        ))}
      </form>
      <div className="button-container">
        <button onClick={onClose} className="cancel-button">
          Cancel
        </button>
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </Modal>
  );
}

export default EmotionPopup;
