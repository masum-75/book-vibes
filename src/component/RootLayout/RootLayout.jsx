import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-sm">
        <Navbar></Navbar>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    );
};

export default RootLayout;