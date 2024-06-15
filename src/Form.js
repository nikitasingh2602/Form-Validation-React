import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? '' : 'First Name is required';
    tempErrors.lastName = formData.lastName ? '' : 'Last Name is required';
    tempErrors.username = formData.username ? '' : 'Username is required';
    tempErrors.email = formData.email.match(/^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/) ? '' : 'Invalid email';
    tempErrors.password = formData.password ? '' : 'Password is required';
    tempErrors.phoneNo = formData.phoneNo.match(/^\+\d{1,3}\s\d{10}$/) ? '' : 'Invalid phone number';
    tempErrors.country = formData.country ? '' : 'Country is required';
    tempErrors.city = formData.city ? '' : 'City is required';
    tempErrors.panNo = formData.panNo.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/) ? '' : 'Invalid PAN number';
    tempErrors.aadharNo = formData.aadharNo.match(/^\d{12}$/) ? '' : 'Invalid Aadhar number';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success', { state: formData });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Phone No:</label>
          <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} placeholder="+91 1234567890" />
          {errors.phoneNo && <span>{errors.phoneNo}</span>}
        </div>
        <div>
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && <span>{errors.country}</span>}
        </div>
        <div>
          <label>City:</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="New York">New York</option>
            <option value="Toronto">Toronto</option>
          </select>
          {errors.city && <span>{errors.city}</span>}
        </div>
        <div>
          <label>PAN No:</label>
          <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
          {errors.panNo && <span>{errors.panNo}</span>}
        </div>
        <div>
          <label>Aadhar No:</label>
          <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
          {errors.aadharNo && <span>{errors.aadharNo}</span>}
        </div>
        <button type="submit" disabled={!Object.values(formData).every(x => x)}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
