import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center">
        <h1 className="mb-4">Movie Status:</h1>
        <div className="mb-2">
          <Link to="/running" className="btn btn-primary btn-lg">Running</Link>
        </div>
        <div>
          <Link to="/ended" className="btn btn-primary btn-lg">Ended</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
