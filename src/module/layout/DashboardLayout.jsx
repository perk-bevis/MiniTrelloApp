
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; 
import Navbar from '../../components/ui/Navbar';
import MenuSlider from '../../module/layout/MenuSlider';
import BoardMenu from './BoardMenu'; 

const DashboardLayout = () => {
  const location = useLocation();
  const isBoardPage = location.pathname.startsWith('/boards/todolist');

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-1">
        {isBoardPage ? <BoardMenu /> : <MenuSlider />}
        <main className="flex-1 overflow-y-auto bg-gray-700">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;