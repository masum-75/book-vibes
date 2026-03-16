import React from "react";

const NotFound = () => {
  const handleGoHome = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center relative overflow-hidden">
      <h1 className="text-[200px] md:text-[300px] font-extrabold text-[#23BE0A] opacity-10 absolute select-none z-0">
        404
      </h1>

      <div className="relative z-10 flex flex-col items-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#131313] mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-8 max-w-md">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>

        <button
          onClick={handleGoHome}
          className="px-10 py-4 bg-[#23BE0A] text-white font-bold rounded-xl cursor-pointer hover:bg-[#1da308] transition-all shadow-xl active:scale-95 text-lg"
          style={{ pointerEvents: "auto" }}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
