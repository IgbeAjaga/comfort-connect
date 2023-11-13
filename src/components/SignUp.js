import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/SignUp.css'; // Import the corresponding CSS file

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    step: 1,
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    height: '',
    complexion: '',
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
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        height: '',
        complexion: '',
        phone: '',
        maritalStatus: '',
        hobby: '',
      });
    }, 2000);

    // After successful signup, you can redirect to another page
    navigate.push('/LoginPage');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {formData.step === 1 && (
        <form onSubmit={handleNext}>
          <input
            type="email"
            name="email"
            placeholder="igbe@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
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
      
      {formData.step === 2 && (
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
            type="tel"
            name="phone"
            placeholder="+2348133456787"
            value={formData.phone}
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
          <input
            type="text"
            name="hobby"
            placeholder="e.g dancing"
            value={formData.hobby}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      )}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <p>
        Already have an account? <Link to="/LoginPage">Log in</Link>
      </p>
    </div>
  );
}

export default SignUp;
