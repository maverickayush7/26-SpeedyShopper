import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async () => {
    try {
      // Send a request to your server to handle the login logic
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successful login, you can redirect the user or perform other actions
        console.log('Login successful');
      } else {
        const errorData = await response.json();
        setLoginError(errorData.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="mt-6 grow flex items-center justify-around">
      <div className="mb-16">
        <h1 className="text-3xl text-center mb-4">Login</h1>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="primary bg-slate-400 py-1 px-2 my-3 rounded-md"
            onClick={handleLogin}
          >
            Login
          </button>
          <button className="primary bg-slate-400 py-1 px-2 rounded-md">
            Login with Google
          </button>
        </form>
        {loginError && <div className="text-red-500">{loginError}</div>}
        <div className="text-center py-2 text-gray-600">
          Don't have an Account yet?
          <Link to="/register" className="underline text-black">
            Join us now!
          </Link>
        </div>
      </div>
    </div>
  );
}
