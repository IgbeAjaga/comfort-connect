import React, { useState } from 'react';
import '../css/ProfileData.css';

function ProfileData({ profileData, onSave }) {
  const [profilePicture, setProfilePicture] = useState(profileData.profilePicture);
  const [height, setHeight] = useState(profileData.height);
  const [maritalStatus, setMaritalStatus] = useState(profileData.maritalStatus);

  const handleProfilePictureChange = (event) => {
    const newProfilePicture = event.target.files[0];
    if (newProfilePicture) {
      setProfilePicture(URL.createObjectURL(newProfilePicture));
    }
  };

  const handleSave = () => {
    const updatedProfileData = {
      profilePicture,
      height,
      maritalStatus,
    };

    onSave(updatedProfileData);
  };

  return (
    <div className="edit-profile">
      <h2>Edit Your Profile</h2>
      <form>
        <div className="form-group">
          <label>Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          <img
            src={profilePicture}
            alt="Profile Picture"
            className="profile-picture"
          />
        </div>
        <div className="form-group">
          <label>Height:</label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Marital Status:</label>
          <select
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value="">Select Marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>
      </form>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default ProfileData;
