import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <div className="grid-bg"></div>
      <main className="w-full min-h-screen container">
        <Header />
        <Outlet />
      </main>
      {/* <footer className="h-10 w-full bg-gray-900 px-10">
        Developed with dedication by Shiyam Robert 💙
      </footer> */}
    </div>
  );
};

export default AppLayout;
