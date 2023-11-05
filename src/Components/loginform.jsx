import React, { useState } from 'react';

export default function LoginFormPractice() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState(null);

  const handleRegistration = async () => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 201) {
        console.log('Registration successful');
        // Redirect or perform other actions
      } else {
        const errorData = await response.json();
        setRegistrationError(errorData.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setRegistrationError('Registration failed');
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
      {registrationError && <p className="error">{registrationError}</p>}
    </div>
  );
}
