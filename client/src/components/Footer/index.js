import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        {Auth.loggedIn() ? (
          <h4>
          {Auth.getProfile().data.username}
          </h4>
        ) : (
          <h4>Welcome User</h4>
        )}
      </div>
    </footer>
  );
};

export default Footer;
