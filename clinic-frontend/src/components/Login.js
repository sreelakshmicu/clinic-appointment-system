import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      navigate('/doctors');
    } catch (err) {
      alert('Login failed. Check credentials.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="p-5 shadow-lg rounded-4"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          minWidth: '320px',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        }}
      >
        <h2 className="text-center text-dark mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-dark">Username</label>
            <input
              type="text"
              className="form-control border-0 rounded-3"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(5px)',
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label text-dark">Password</label>
            <input
              type="password"
              className="form-control border-0 rounded-3"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(5px)',
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
          type="submit"
          className="btn w-100"
          style={{
            backgroundColor: '#e67e22',
            border: 'none',
            color: '#fff',
            fontWeight: 'bold',
            transition: '0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#d35400')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#e67e22')}
        >
          Login
        </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
