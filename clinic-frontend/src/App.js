import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './Router'; 
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="body-background">
      <div className="container mt-4">
        <AppRoutes />  {/* Routes rendered here */}
      </div>
      </div>
    </>
  );
}

export default App;
