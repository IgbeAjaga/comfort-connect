import React from 'react'
import '../css/DropDownProfile.css';
import { Link } from "react-router-dom";

const DropDownProfile = () => {
    return(
        <div className='flex flex-col dropDownProfile'>
            
    <Link to="/edit-profile" className="profile-link">
      Edit Profile
    </Link>
    <br></br>
    <Link to="/Logout" className="profile-link">
      Logout
    </Link>
  </div>
        
    )
}

export default DropDownProfile;