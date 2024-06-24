import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simple validation
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
      setError('');
    } else {
      setLoggedIn(false);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-[#fce3fe] to-[#ffffff]">
      <div className="w-full max-w-2xl h-auto bg-white rounded-lg shadow-lg p-10">
        {!loggedIn ? (
          <>
            <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-5 mb-4 border border-gray-300   focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4  mb-6 border border-gray-300 py-5 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleLogin}
              className="w-full px-4  bg-red-500 text-white py-5 hover:bg-red-600 font-bold transition duration-300"
            >
              Login
            </button>
            <p className="mt-4 text-center font-bold text-gray-600 text-sm">
              Don't have an account?{' '}
              <span className="text-blue-500 cursor-pointer">Sign up</span>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-4 text-center">Welcome, {username}!</h2>
            <button
              onClick={() => setLoggedIn(false)}
              className="w-full px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
