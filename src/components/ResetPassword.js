import React, { useState } from 'react';
import '../css/ResetPassword.css';

function ResetPassword() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOTP] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleReset = () => {
    // Handle password reset logic here
  };

  return (
    <div className="reset-password-container">
      {step === 1 && (
        <div className="reset-password-slide">
          <h2>Step 1: Enter Phone, Username, and Password</h2>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="reset-password-slide">
          <h2>Step 2: Enter OTP</h2>
          <div className="form-group">
            <label>OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div className="reset-password-slide">
          <h2>Step 3: Enter Old Password, New Password, and Confirm New Password</h2>
          <div className="form-group">
            <label>Old Password:</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Confirm New Password:</label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          <button onClick={handleReset}>Reset</button>
        </div>
     )}
    </div>
  );
}

export default ResetPassword;
