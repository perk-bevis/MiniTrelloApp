import React from 'react';
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className='p-8'>
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
        Your Workspaces
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Link
          to={`/boards/todolist`}
          className=" w-[250px]  block h-35 rounded-md bg-white p-4 font-bold text-gray-900 transition-transform hover:scale-105 shadow-sm"
        >
          My Trello board
          
        </Link>
        <button className="w-[250px] flex h-35 items-center justify-center rounded-md bg-white/10 p-4 text-gray-300 transition-colors hover:bg-white/20">
          + Create a new board
        </button>
      </div>
    </div>
  );
};

export default MainContent;