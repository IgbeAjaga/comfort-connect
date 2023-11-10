import React, { useState } from 'react';
import ProfileData from './ProfileData'; // Import the EditProfile component
import '../css/EditProfile.css';

function EditProfile() {
  const [profileData, setProfileData] = useState({
    profilePicture: '', // Provide the initial profile data
    height: '',
    maritalStatus: '',
  });

  const handleSaveProfile = (updatedProfileData) => {
    // Update the profile data with the changes made in EditProfile component
    setProfileData(updatedProfileData);
  };

  return (
    <div>
      {/* Render the EditProfile component and pass the profileData and onSave handler */}
      <ProfileData profileData={profileData} onSave={handleSaveProfile} />
      {/* Rest of your component code... */}
    </div>
  );
}



export default EditProfile;
