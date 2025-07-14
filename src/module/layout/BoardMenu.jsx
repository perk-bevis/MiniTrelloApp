import React from 'react';
import { Folder, Users, MoreHorizontal } from 'lucide-react';
import folder from "../../assets/folder.svg"
const members = [
  { id: 1, name: 'User 1', initials: 'SD' },
  { id: 2, name: 'User 2', initials: 'SD' },
  { id: 3, name: 'User 3', initials: 'SD' },
  { id: 4, name: 'User 4', initials: 'SD' },
];

const BoardMenu = () => {
  return (
    <aside className="w-[300px] bg-[#2d3339] text-white flex flex-col" style={{ height: 'calc(100vh - 64px)' }}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex-shrink-0">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Your boards
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <ul>
          <li className="flex justify-between items-center py-2 border-b border-gray-700">
            <div className="flex items-center">
              <img src={folder} alt="" srcSet="" />
              <span className="ml-3 font-thin">My Trello board</span>
            </div>
            <button className="text-gray-400 hover:text-white">
              <MoreHorizontal size={20} />
            </button>
          </li>
          <li className="flex items-center py-2 mt-2">
            <Users size={20} className="text-gray-400" />
            <span className="ml-3">Members</span>
          </li>
        </ul>

        <ul className="ml-9 mt-2 space-y-2">
          {members.map((member) => (
            <li key={member.id} className="flex items-center">
              <div className="w-7 h-7 rounded-full bg-[#CC1D08] flex items-center justify-center text-xs font-bold">
                {member.initials}
              </div>
              <span className="ml-3 text-sm">{member.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-t border-gray-700 bg-[#2d3339] flex-shrink-0">
        <p className="text-xs text-gray-400 mb-3 leading-relaxed">
          You can't find and reopen closed boards if close the board
        </p>
        <button className="w-full bg-[#EF5855] hover:bg-[#EF5855]/80 text-[#171A1F] py-2 px-4 rounded-md transition-colors leading-5">
          Close
        </button>
      </div>
    </aside>
  );
};

export default BoardMenu;