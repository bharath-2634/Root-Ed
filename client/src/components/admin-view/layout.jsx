import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHeader from '../common/navHeader';

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden font-poppins">
      {/* Admin Header */}
      <NavHeader />
      
      {/* Admin Content */}
      <main className="flex flex-col flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
