import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center p-5">
      <h1 className="text-9xl font-extrabold text-[#23BE0A] opacity-20">404</h1>
      
      <div className="absolute flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#131313] mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="px-8 py-3 bg-[#23BE0A] text-white font-bold rounded-lg hover:bg-[#1da308] transition-all shadow-lg"
        >
          Go Back Home
        </Link>
      </div>

      <div className="mt-20 opacity-10">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      </div>
    </div>
  );
};

export default NotFound;