import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/SignUp.css'; // Import the corresponding CSS file

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    step: 1,
    phone: '',
    otp: '',
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    height: '',
    complexion: '',
    dob: '',
    maritalStatus: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setFormData({
      ...formData,
      step: formData.step + 1,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a delay to mimic registration process
    setTimeout(() => {
      // Update the success message and clear form data
      setSuccessMessage('Thank you for Signing up!!!');
      setFormData({
        step: 1,
        phone: '',
        otp: '',
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        height: '',
        complexion: '',
        dob: '',
        maritalStatus: '',
      });
    }, 2000);

    // After successful signup, you can redirect to another page
    navigate.push('/Login');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {formData.step === 1 && (
        <form onSubmit={handleNext}>
          <input
            type="tel"
            name="phone"
            placeholder="+2348133456787"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Next</button>
        </form>
      )}
      {formData.step === 2 && (
        <form onSubmit={handleNext}>
          <input
            type="text"
            name="otp"
            placeholder="OTP"
            value={formData.otp}
            onChange={handleChange}
            required
          />
          <button type="submit">Next</button>
        </form>
      )}
      {formData.step === 3 && (
        <form onSubmit={handleNext}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Next</button>
        </form>
      )}
      {formData.step === 4 && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="height"
            placeholder="Height"
            value={formData.height}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="complexion"
            placeholder="Complexion"
            value={formData.complexion}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select Marital Status</option>
            <option value="single">Single</option>
            <option value="engaged">Engaged</option>
            <option value="married">Married</option>
            <option value="separated">Separated</option>
            <option value="divorced">Divorced</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
      )}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <p>
        Already have an account? <Link to="/Login">Log in</Link>
      </p>
    </div>
  );
}

export default SignUp;
