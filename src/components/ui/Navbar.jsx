import React from 'react';
import skipli from "../../assets/skipli.png";
import notification from "../../assets/notification.png";
import { LayoutGrid } from 'lucide-react';
const Navbar = () => {
  return (
     <nav className="flex items-center justify-between bg-gray-800 px-4 py-2">
      <div className="flex items-center">
        <button 
          type="button" 
          className="p-1 rounded-full text-white hover:bg-gray-700 cursor-pointer"
        >
          <LayoutGrid className='h-4 w-4'/>
        </button>
        <div className="ml-4">
          <img src={skipli} alt="Skipli Logo" className="h-10 w-auto" />
        </div>
      </div>
      <div className="flex items-center">
        <button
          type="button" 
          className="left-[1371px] p-1 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-4"
        >
          <img src={notification} alt="Notifications" className="h-[17px] w-[17px]" />
        </button>
        <div className="w-[26px] h-6 bg-red-500 rounded-xl">
          <span className='text-sm flex items-center justify-center'>SD</span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
