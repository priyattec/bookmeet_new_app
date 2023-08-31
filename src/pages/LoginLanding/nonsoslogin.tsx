import HeaderItem from "../../features/Header/Header";
import LoginPgImg from "../../assets/LoginPgImg.png";
import  {Form, Button, Alert}  from "react-bootstrap";
import React, { useState } from 'react';
import '../LoginLanding/LoginLanding.css'


const NonsosLogin = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleGetOTP = () => {
    if (validateInputs()) {
      // Placeholder: Send OTP to email logic (should be implemented on the backend)
      // Simulating OTP sending for demonstration
      console.log('OTP sent to email:', email);
    }
  };

  const handleSubmit = () => {
    if (validateInputs() && otp.trim() !== '') {
      // Placeholder: Submit form with OTP logic (should be implemented on the backend)
      console.log('Form submitted with OTP:', otp);
    }
  };

  const validateInputs = () => {
    if (fullName.trim() === '') {
      setError('Full name cannot be empty');
      return false;
    } else if (!email.match(/^\S+@\S+\.\S+$/)) {
      setError('Invalid email format');
      return false;
    } else if (!mobileNumber.match(/^\d{10}$/)) {
      setError('Invalid mobile number (10 digits only)');
      return false;
    }
    setError('');
    return true;
  };
  return (
    <div>
      <HeaderItem />
      <div className="container">
        <div className="textPart">
          <h1>Welcome to the Ttec BookMeet App!</h1>
          <div className="loginForm">
      <Form>
        <Form.Group controlId="fullName">
          <Form.Control
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="mobileNumber">
          <Form.Control
            type="tel"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleGetOTP}>
          Get OTP
        </Button>

        <Form.Group controlId="otp">
          <Form.Control
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>

        {error && <Alert variant="danger">{error}</Alert>}
      </Form>
    </div>
        </div>
        <div className="ImgPart">
          <div className="displayImg">
            <img
              src={LoginPgImg}
              alt=" 2 people sitting"
              style={{backgroundColor:"#ff9933", width: '95%', padding:'1rem', marginTop: '5rem'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NonsosLogin;
