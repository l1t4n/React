import React, { useState, useEffect } from 'react';
import { TextField, Button, CircularProgress, IconButton, InputAdornment } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

export const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(validateEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return re.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const isFormValid = () => {
    return email !== '' && password !== '' && confirmPassword !== '' && isValidEmail && validatePassword(password) && password === confirmPassword;
  };

  return (
    <div>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            className='input'
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            required
            error={!isValidEmail && email !== ''}
            helperText={!isValidEmail && email !== '' && 'Invalid email format'}
          />
          <TextField
            className='input'
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            required
            error={password !== '' && !validatePassword(password)}
            helperText={password !== '' && !validatePassword(password) && 'Password must contain at least 8 characters, including one number and one special symbol'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {/* {showPassword ? <Visibility /> : <VisibilityOff />} */}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className='input'
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            fullWidth
            required
            error={confirmPassword !== '' && password !== confirmPassword}
            helperText={confirmPassword !== '' && password !== confirmPassword && 'Passwords do not match'}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isFormValid()}
            fullWidth
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

