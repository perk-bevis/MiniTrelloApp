import React from 'react'
import { Link } from 'react-router-dom';
import { ChartNoAxesColumn, Users } from 'lucide-react'; 
const navItems = [
  { 
    name: 'Boards', 
    path: '/boards', 
    icon: ChartNoAxesColumn
  },
  { 
    name: 'All Members', 
    path: '/members', 
    icon: Users 
  },
];

const MenuSlider = () => {
  return (
       <aside className="w-[300px] h-screen bg-gray-700 text-white p-4">
      <nav>
        <ul className='relative top-15 ml-14'>
          {navItems.map((item) => {
            return (
              <li key={item.name} className="mb-2 w-[225px]">
                <Link
                  to={item.path}
                  className="flex items-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-600"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
    );
}

export default MenuSlider
